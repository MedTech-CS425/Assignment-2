import 'dart:convert';
import 'dart:async';
import 'package:libraryM/api/session.dart';
import 'package:http/http.dart' as http;
import 'package:libraryM/classes/chat.dart';
import 'package:intl/intl.dart';
import 'package:shared_preferences/shared_preferences.dart';


class ApiChat {

  Session session = new Session() ;
  SharedPreferences pref ;


  Future getChats() async {
    http.Response res = await http.get(session.baseUrl + 'messages/chats' , headers: await session.getSession()) ;
    return res.body ;
  }

  Future getCachedChats() async {
    pref = await SharedPreferences.getInstance() ;
    String chats = pref.getString('chats' ?? null) ;
    if(chats != null) return chats ;
    else return await fillChats();
  }

  Future cacheChats(chats) async {
    pref = await SharedPreferences.getInstance() ;
    pref.setString('chats', chats) ;
  }

  Future checkChatUpdates() async {
    http.Response res = await http.get(session.baseUrl + 'messages/updateChats' , headers: await session.getSession()) ;
    if(res.body == '0'){
      var chats = [] ;
      var tmp = jsonDecode(await getCachedChats()) ;
      print(tmp);
      for (var c in tmp) {
        var lastMsg ;
        try {
          lastMsg  = await getLastMessage(c['id']) ;
        }
        catch(e) {
          lastMsg = null ;
        }
        if(lastMsg != null)
          chats.add(new Chat(c['username'] , c['id'] , c['user_id'] , lastMsg['content'])) ;
        else chats.add(new Chat(c['username'] , c['id'] , c['user_id']  ,'lastMessage')) ;
      }
      return chats ;
    }
    else if(res.body == '1') return await fillChats() ;
  }

  Future fillChats() async {
    List<Chat> myChats = [] ;
    try {

      dynamic chats = jsonDecode(await getChats());
      print('chats') ;
      for(var chat in chats) {
        myChats.add(new Chat(chat['username'] , chat['id'] , chat['user_id'] , 'testing message')) ;
      }

      return myChats ;

    }catch(err) {
      return [] ;
    }
  }

  Future createConversation(uid) async {
    http.Response res = await http.get(session.baseUrl + 'messages/createRoom/' + uid.toString() , headers: await session.getSession() );
    print(res.body);
    return jsonDecode(res.body)  ;
  }

  Future getConversation(id) async {
    http.Response res = await http.get(session.baseUrl + 'messages/fetch/' + id.toString() , headers: await session.getSession() );
    return res.body ;
  }

  Future send(msg) async {
    http.Response res = await http.post(session.baseUrl + 'messages/send' ,
        body: {'content' : msg.message ,
          'sender' : msg.currentUser.toString() ,
          'room' : msg.room.toString(),
        } ,
        headers: await session.getSession());

    return res.statusCode ;
  }


  Stream checkConversationUpdates(room) async* {
    while(true) {
        yield await updateConversation(room);
      }
    }


  convertStringConversation(stringList,room) async {
    if(stringList == '' || stringList == null) return await updateConversation(room) ;
    List<Message> messages = [];
    dynamic _chats ;
    try {
      _chats = jsonDecode(stringList);
    } catch (e) {
      pref = await SharedPreferences.getInstance() ;
      pref.remove(room.toString() + 'conv') ;
      return await updateConversation(room) ;
    }
    if(_chats != null)
      for (var msg in _chats) {
        var datetime = DateTime.parse(msg['date']);
        final format = DateFormat('HH:mm a');
        messages.add(new Message(
            msg['content'], format.format(datetime), msg['sender'], room));
      }
    return messages ;
  }

  Future cacheConversation(response) async {
    pref = await SharedPreferences.getInstance() ;
    String previouslyCached = pref.getString(response[0]['room'].toString() + 'conv') ?? '' ;
    String newCached ;
    (previouslyCached != '')  ? newCached = previouslyCached + jsonEncode(response)
        : newCached = jsonEncode(response) ;
    pref.setString(response[0]['room'].toString() + 'conv',newCached) ;
  }


  Future getLastMessage(room) async {
    pref = await SharedPreferences.getInstance() ;
    var lastMessage = (pref.getString(room.toString() + 'conv')) ;
    var lastMsgJson ;
    if(lastMessage != null) {
      try {
        lastMsgJson = jsonDecode(lastMessage);
        return lastMsgJson[lastMsgJson.length - 1] ;
      } catch(e) {
        print(e) ;
        pref.remove(room.toString() + 'conv') ;
        return null ;
      }
    }
    else return null ;
  }

  //id here is the room id !!!!!
  Future updateConversation(id) async {
    http.Response res = await http.get(
        session.baseUrl + 'messages/fetchmessages/' + id.toString() + '/0',
        headers: await session.getSession());
    var response = jsonDecode(res.body) ;
    if (response.length == 0 ) return [] ;
    else {
      cacheConversation(response) ;
      List<Message> messages = await convertStringConversation(res.body, id) ;
      return messages.reversed.toList();
    }
  }

}