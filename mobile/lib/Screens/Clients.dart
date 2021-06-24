import 'package:flutter/material.dart';
import 'package:libraryM/api/chats.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/classes/user.dart';

import '../main.dart';
import '../utils.dart';
import 'Books.dart';
import 'Conversation.dart';

class Clients extends StatefulWidget {

  @override
  ClientsState createState() => ClientsState() ;
}

class ClientsState extends State<Clients> {
  @override
  Widget build(BuildContext context) {

    ApiUser api = new ApiUser() ;

    return Scaffold(
        appBar: AppBar(
          title: Text('Clients'),
          actions: [
            IconButton(
              onPressed: () async {
                ApiUser user = new ApiUser();
                await user.loggout();
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => MyApp()));
              },
              icon: Icon(Icons.logout, size: deviceWidth(context) * 0.06,),
            ),
          ],
        ),
        body: Padding(
          padding: EdgeInsets.only(top : deviceHeight(context) * 0.0),
          child: FutureBuilder(
            future: api.getClients(),
            builder: (context, snapshot) {
              if(snapshot.hasData)
              return ListView.builder(
                  itemCount: snapshot.data.length,
                  itemBuilder: (context , index){
                    return (snapshot.data[index].id != User.user.id) ? clientItem(snapshot.data[index].username,snapshot.data[index].id)
                    : SizedBox.shrink();
                  }
              );
              else return Center(
                child: CircularProgressIndicator(),
              ) ;
            }
          ),
        )
    );
  }

  clientItem(name,id) {
    return InkWell(
      splashColor: Colors.grey,
      onTap: () {
        Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => Books.byClient(true,id))
        ) ;
      },
      child: Ink(
        height: deviceHeight(context) * 0.085,
        decoration: BoxDecoration(
            border: Border(
                bottom: BorderSide(color: Colors.grey, width: 1)
            )
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Padding(
              padding: EdgeInsets.only(left : deviceWidth(context) * 0.04),
              child: Text(name , style: secTextBlack,),
            ),
            IconButton(icon: Icon(Icons.chat_bubble), onPressed: () async {
              ApiChat conv = new ApiChat();
              var roomId = await conv.createConversation(id) ;
              Navigator.push(context, PageRouteBuilder(
                  transitionDuration: Duration(milliseconds: 1500),
                  transitionsBuilder: (context , animation , animTime , child){
                    animation = CurvedAnimation(
                        parent: animation, curve: Curves.elasticInOut
                    );
                    return ScaleTransition(
                      scale: animation,
                      child: child,
                      alignment: Alignment.center,
                    );
                  },
                  pageBuilder: (context , animation , animTime) =>
                      ChatScreen(roomId,name))) ;

              setState(() {
              });
            }),
          ],
        ),
      ),
    );
  }

}