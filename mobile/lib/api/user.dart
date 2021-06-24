
import 'dart:convert';

import 'package:http/http.dart' as http ;
import 'package:shared_preferences/shared_preferences.dart';
import 'session.dart';
import 'package:libraryM/classes/user.dart';



class ApiUser {

  int id ;
  String username ;
  String email ;
  String password ;
  String img ;

  Session session = new Session() ;

  ApiUser({this.username, this.password});

  Future log() async {
    http.Response res = await http.post(session.baseUrl + 'login' , body : { 'username' : this.username , 'password' : this.password}) ;
    if(res.statusCode == 200) {
      await session.setSession(res , this.username , this.password) ;
    }
    return res.body ;
  }

  Future loggout() async {
    http.Response res = await http.get(session.baseUrl + 'loggout' , headers: await session.getSession()) ;
    await session.logout();
    return res.body ;
  }

  Future register() async {
    http.Response res = await http.post(session.baseUrl + 'register' ,
        body : { 'username' : this.username , 'email' : this.email , 'password' : this.password}) ;
    return res.body ;
  }

  Future getClients() async {
    http.Response res = await http.get(session.baseUrl + 'clients' , headers: await session.getSession()) ;
    print(res.body) ;
    if(res.statusCode == 200) {
      var clients = jsonDecode(res.body) ;
      var allClients = [] ;

      for (var b in clients)
        if(b != null)
          allClients.add(
              new Client(b['id'], b['username'], b['email'] )
          );
      return allClients ;
    }

  }

  }

