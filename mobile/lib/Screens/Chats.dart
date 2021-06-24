import 'dart:ui';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/classes/user.dart';
import 'package:libraryM/Screens/Conversation.dart';
import 'package:flutter/material.dart';
import 'package:libraryM/api/chats.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

import '../main.dart';
import '../utils.dart';


class Chats extends StatefulWidget {

  @override
  ChatsState createState() => ChatsState() ;
}

class ChatsState extends State<Chats> {

  ApiChat chats = new ApiChat() ;

  RefreshController _refreshController = RefreshController(initialRefresh: false);

  var chatList ;

  void initState() {
    super.initState() ;
    getLatestChats() ;
  }

  getLatestChats() async {
    var tmp = await chats.fillChats() ;
    setState(() {
      chatList = tmp ;
    });
  }

  onRefresh() async {
    await getLatestChats() ;
    _refreshController.refreshCompleted();
  }

  onLoading() {
    setState(() {
    });

    _refreshController.loadComplete();
  }


  Widget build (BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Chats'),
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
      backgroundColor: Colors.white70,
      body: Center(
        child: (chatList != null) ? SmartRefresher(
          controller: _refreshController,
          onRefresh: onRefresh,
          onLoading: onLoading,
          enablePullDown: true,
          header: 	WaterDropMaterialHeader(),
          child: ListView.builder(
            itemCount: chatList.length,
            itemBuilder: (BuildContext context, int index) {
              return
                Hero (
                    tag: 'tagChatElem$index',
                    child: chatElement(chatList[index].secondUser, chatList[index].lastMsg ?? '' ,
                        chatList[index].id,chatList[index].secondId,context)
                );

            },
          ),
        ) : Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}




chatElement(second , lastMsg , id , image,  context){
  return InkWell(
    splashColor: Colors.white38,
    onTap: () async {
      Navigator.push(context, MaterialPageRoute(builder: (context) => ChatScreen(id , second))) ;
    },
    child: Padding(padding: EdgeInsets.symmetric(
        horizontal: deviceWidth(context) * 0.005 ,
        vertical: deviceHeight(context) *0.00
    ),
      child: Ink(
        height: deviceHeight(context) * 0.11,
        decoration: BoxDecoration(
            color: Colors.white70,
            border: Border(
                bottom: BorderSide(color: Colors.grey, width: 1)
            )
        ),

        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            SizedBox(width: deviceWidth(context) * 0.025,) ,
            CircleAvatar(
              radius: deviceWidth(context) * 0.0725,
              child: ClipOval(
                child: CachedNetworkImage(
                  imageUrl : User.user.session.baseUrl + 'images/user/' + image.toString()
                      + '/' + image.toString() + '.jpeg',
                  fit: BoxFit.contain,
                ),
              ),
            ),
            SizedBox(
              width: deviceWidth(context) * 0.05,
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                Expanded(
                  child: Center(
                      child: Text(second.toString() , style: secTextBlack)
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    ),
  );
}

