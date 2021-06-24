import 'dart:convert';

import 'package:libraryM/classes/user.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:libraryM/api/user.dart';
import 'package:http/http.dart' as http ;

class Session {
  //String baseUrl = 'http://149.202.43.22:3000/' ;
  String baseUrl = 'http://192.168.1.15:3000/' ;
  String imgUrl ;

  Session(){
    imgUrl = baseUrl + 'images/' ;
  }

  Map<String,String> headers= {} ;

  Future setSession(res , username , password) async {
    dynamic body = jsonDecode(res.body) ;
    final rawCookie = res.headers['set-cookie'] ;
    if (rawCookie != null) {
      int index = rawCookie.indexOf(';');
      headers['cookie'] =
      (index == -1) ? rawCookie : rawCookie.substring(0, index);

      SharedPreferences pref = await SharedPreferences.getInstance();
      pref.setString('cookie', headers['cookie']) ;
      pref.setInt('currentId', body['id']) ;
      pref.setBool('isAdmin', (body['admin'] == 1) ? true : false ) ;
      pref.setString('username', username) ;
      pref.setString('password', password) ;
    }
  }

  Future getSession() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    return {'cookie' : pref.getString('cookie')} ;
  }

  Future getJavaSession() async {
    SharedPreferences pref = await SharedPreferences.getInstance();
    return  pref.getString('cookie') ;
  }

  Future logout() async {
    SharedPreferences pref = await SharedPreferences.getInstance() ;
    pref.setInt('currentId', -1) ;
    pref.setString('username', '-1') ;
    pref.setString('password', '-1') ;
  }

  void setGlobalUser(user) {
    User.user = user ;
  }

  Future<int> testLogged() async {
    http.Response res  ;
    bool noInternet = false ;
    try {
      res = await http.get(baseUrl + 'testsession', headers: await getSession()) ;
    }catch(err) {
      noInternet = true ;
    }


    SharedPreferences pref = await SharedPreferences.getInstance();
    String username = pref.getString('username' ?? null) ;
    String password = pref.getString('password' ?? null) ;
    bool isAdmin = pref.getBool('isAdmin') ;
    int id = pref.getInt('currentId' ?? -1 ) ;

    if(noInternet) {
      ApiUser user = new ApiUser(username: username , password: password) ;
      user.id = id ;
      setGlobalUser(user) ;
      User.isAdmin = isAdmin ;
      return -1 ;
    }

    if(res.statusCode == 403){

      if(username == '-1' || username == null) return 403 ;

      ApiUser user = new ApiUser(username: username , password: password) ;
      user.id = id ;
      setGlobalUser(user) ;
      User.isAdmin = isAdmin ;
      try {
        if(await user.log() == 'Forbidden') return 403;
      }
      catch (e){
        return 403 ;
      }

      return 200 ;

    }

    else if(res.statusCode == 200) {
      if(!User.isStored) {
        ApiUser user = new ApiUser(username: username , password: password) ;
        user.id = id ;
        setGlobalUser(user) ;
        User.isAdmin = isAdmin ;
      }
      return res.statusCode ;
    }
    else return -1 ;
  }

}