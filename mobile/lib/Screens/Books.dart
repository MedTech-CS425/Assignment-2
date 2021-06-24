import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'package:libraryM/Screens/AddBook.dart';
import 'package:libraryM/api/book.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/classes/user.dart';
import 'dart:core';

import '../main.dart';
import '../utils.dart';

class Books extends StatefulWidget {

  bool byClient ;
  int clientId ;


  Books.byClient(this.byClient, this.clientId);
  Books(this.byClient) ;

  @override
  BooksState createState() => BooksState() ;
}

class BooksState extends State<Books> {

  ApiPost api = new ApiPost() ;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: User.user.session.testLogged(),
      builder: (context, snapshot) {
        return Scaffold(
            appBar: AppBar(
              title: Text('Books'),
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
              padding: EdgeInsets.only(top : deviceHeight(context) * 0.002),
              child: Stack(
                children: [
                  FutureBuilder(
                    future: (!widget.byClient) ? api.getAll() : api.getByClient(widget.clientId),
                    builder: (context, snapshot) {
                      if(snapshot.hasData)
                      return ListView.builder(
                        itemCount: snapshot.data.length,
                        itemBuilder: (context , index){
                          return bookItem(snapshot.data[index].id, snapshot.data[index].title, snapshot.data[index].description ,
                              snapshot.data[index].nbr , snapshot.data[index].date) ;
                        });
                       else return Center(
                          child: CircularProgressIndicator(),
                      ) ;
                    }
                  ),
                  (User.isAdmin) ?
                  Positioned.fill(
                    child: Align(
                      alignment: Alignment.bottomRight,
                      child: Container(
                        height: deviceHeight(context) * 0.1,
                        width: deviceWidth(context) * 0.2,
                        child: Padding(
                          padding: EdgeInsets.only(bottom: deviceHeight(context) * 0.02,right: deviceWidth(context) * 0.05),
                          child: FloatingActionButton(
                              child: Icon(Icons.add),
                              onPressed: () {
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            EditProfile())
                                );
                          }),
                        ),
                      ),
                    ),
                  ) : SizedBox.shrink()
                ],
              ),
            )
        );
      }
    );
  }

  bookItem(id,name, description,nbr,date) {

    var finalDate = null ;
    if(date != null) {
      DateTime parsedDate = DateTime.parse(date);
      parsedDate = parsedDate.add(new Duration(days: 90));
      finalDate = DateFormat("yyyy-MM-dd").format(parsedDate).toString() ;
      }

    return InkWell(
      splashColor: Colors.grey,
      onTap: () {

      },
      child: Ink(
        height: deviceHeight(context) * 0.2,
        decoration: BoxDecoration(
            border: Border(
                bottom: BorderSide(color: Colors.grey, width: 1)
            )
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Padding(
              padding:  EdgeInsets.only(left : deviceWidth(context) * 0.0009),
              child: Container(
                  child: Image.network('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847')
              ),
            ),
            SizedBox(
              width: deviceWidth(context) * 0.025,
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      SizedBox(height: deviceHeight(context) * 0.02,),
                      Text(name , style: secTextBlack,),
                      SizedBox(
                        height: deviceHeight(context) * 0.01,
                      ),
                      Text(description , style: smallTextGrey, overflow: TextOverflow.ellipsis,)
                    ],
                  ),
                  (!widget.byClient) ?
                  (User.isAdmin) ?
                  Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      IconButton(icon: Icon(
                        Icons.delete,
                        color: Colors.red,
                        size: deviceWidth(context) * 0.075,
                      ), onPressed: () async {
                          await api.delete(id) ;
                      }),
                      Text( nbr.toString() , style: secTextBlack,),

                    ],
                  ) : Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      IconButton(icon: Icon(
                        Icons.payment,
                        color: Colors.red,
                        size: deviceWidth(context) * 0.075,
                      ), onPressed: () async {
                        await api.borrow(id) ;
                      }),
                      Expanded(
                        child: Padding(
                          padding: EdgeInsets.symmetric(horizontal: deviceWidth(context) * 0.015),
                          child: Text( nbr.toString() , style: secTextBlack,),
                        ),
                      ) ,
                    ],
                  ) :
                  Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Row(
                        mainAxisAlignment : MainAxisAlignment.end ,
                        children: [
                          IconButton(icon: Icon(
                            Icons.timelapse,
                            color: Colors.red,
                            size: deviceWidth(context) * 0.075,
                          ), onPressed: () {

                          }),
                        ],
                      ),
                      Text( (finalDate != null) ? finalDate : '', style: secTextBlack,),
                    ],
                  )
                ],
              ),
            ),


          ],
        ),
      ),
    );
  }

}