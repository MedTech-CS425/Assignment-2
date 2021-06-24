import 'package:libraryM/api/chats.dart';
import 'package:libraryM/classes/user.dart';
import 'package:libraryM/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:libraryM/classes/chat.dart';



class ChatScreen extends StatefulWidget {

  final String username ;
  final int roomId ;
  ChatScreen(this.roomId ,  this.username) ;
  @override
  ChatState createState()  =>  ChatState() ;

}

class ChatState extends State<ChatScreen> {

  final fieldText = TextEditingController();

  void clearText() {
    fieldText.clear();
  }

  ApiChat chat = new ApiChat() ;

  var image ;

  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async  {
        Navigator.of(context).pop() ;
        return ;
      },
      child: Scaffold(
        backgroundColor: Colors.blueGrey[900],
        appBar: AppBar(
          title: Text( widget.username , style: menuTextWhite,),
          elevation: 1.0 ,
          actions: <Widget>[
            IconButton(icon: Icon(Icons.more_horiz), onPressed: () {}),
          ],),
        body: GestureDetector(
          onTap: () => FocusScope.of(context).unfocus(),
          child: Padding(
            padding: EdgeInsets.only(top: 11.0),
            child: Column(
              children: <Widget>[
                Expanded(
                    child: StreamBuilder(
                      stream: chat.checkConversationUpdates(widget.roomId),
                      builder: (context , snap) => (snap.hasData) ? ListView.builder(
                          reverse: true,
                          itemCount: snap.data.length,
                          itemBuilder: (context , index) {
                            bool mine = snap.data[index].currentUser == User.user.id ;
                            return build_message(snap.data[index].message, mine , snap.data[index].time) ;
                          }) : (snap.hasError) ?
                      Center(
                        child: Text('Something \nwrong \nhappened !', style: titleText,),
                      )
                          :
                      Center(
                        child: CircularProgressIndicator(),
                      ),

                    )
                ),
                buildcomposer(),
              ],
            ),
          ),
        ),
      ),
    ) ;
  }

  buildcomposer(){
    String message  ;
    return Container(
      height: deviceHeight(context) * 0.08,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            height: deviceHeight(context) * 0.0005,
            width: deviceWidth(context),
            color: Colors.white,
          ),
          SizedBox(height: deviceHeight(context) * 0.0052,),
          Row(
            children: <Widget>[
              IconButton(
                icon: Icon(Icons.photo ,color: Colors.white),
                iconSize: deviceWidth(context) * 0.07,
                onPressed: ()  {

                },
              ),
              Expanded(
                child: TextField(
                  style: TextStyle(color: Colors.white , fontWeight: FontWeight.w600),
                  decoration: InputDecoration.collapsed(hintText: 'Az' ,
                    hintStyle: TextStyle(fontWeight: FontWeight.w500 , color: Colors.white38),
                  ),
                  onChanged: (value){
                    message = value ;
                  },
                  controller: fieldText,
                ),
              ),
              IconButton(
                  icon: Icon(Icons.send , color: Colors.white),
                  iconSize: 25.0,
                  onPressed: () async {
                    Message msg ;
                    if(image != null)
                      msg = new Message.withImage(message , image ,DateTime.now().toString() ,
                          User.user.id , widget.roomId) ;

                    else  msg = new Message(message , DateTime.now().toString() ,
                        User.user.id , widget.roomId) ;

                    await chat.send(msg);


                    FocusScope.of(context).unfocus();
                    clearText();
                  }
              ),

            ],
          ),
        ],
      ),

    );
  }



  build_message(String msg , bool mine , time ){
    return Padding(
      padding: mine ? EdgeInsets.only(left: deviceWidth(context) * 0.35 , bottom: deviceHeight(context) * 0.02 ,
          right: deviceWidth(context) * 0.05) :
      EdgeInsets.only(right: deviceWidth(context) * 0.35 , bottom: deviceHeight(context) * 0.02,
          left: deviceWidth(context) * 0.05),
      child: Container(
        decoration: BoxDecoration(
            color:(mine) ? Colors.blue[500] : Colors.blueGrey,
            borderRadius: BorderRadius.all(Radius.circular(5))
        ),
        width: deviceWidth(context) * 0.4,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding:  EdgeInsets.only(top : deviceHeight(context) * 0.015 , left: deviceWidth(context) * 0.02),
              child: Text(time , style: smallTextWhite,),
            ),
            Padding(
              padding:  EdgeInsets.only(top : deviceHeight(context) * 0.01 , left: deviceWidth(context) * 0.02),
              child: Text(msg , style: smallTextWhite,),
            ),
            SizedBox(height: deviceHeight(context) * 0.0125,)
          ],
        ),
      ),
    );
  }

}