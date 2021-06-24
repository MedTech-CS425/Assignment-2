import 'package:cached_network_image/cached_network_image.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/classes/book.dart';
import 'package:libraryM/classes/user.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:libraryM/utils.dart';
import 'package:flutter_cache_manager/flutter_cache_manager.dart';

//ignore: must_be_immutable
class EditProfile extends StatelessWidget {

  final _formKey = GlobalKey<FormState>();
  String title , description  ;
  int number ;

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child : Form(
          key: _formKey ,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: deviceWidth(context) * 0.06,vertical: deviceHeight(context) * 0.07),
            child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children : <Widget> [
                  Row(
                    mainAxisAlignment : MainAxisAlignment.start ,
                    children: [
                      IconButton(
                          icon:Icon(
                            Icons.arrow_back_ios
                            , color: Colors.black87,),
                          onPressed: () {
                            Navigator.pop(context) ;
                          }
                      ),
                      Text('Add Book' , style: subtitleText ,),
                    ],
                  ),
                  SizedBox(height: deviceHeight(context) * 0.2,),
                  Text('Title' , style: menuTextGrey,),
                  SizedBox(height: deviceHeight(context) * 0.01,),
                  TextFormField(
                    validator: (value) {
                      if (value.isEmpty) {
                        return 'Enter Title';
                      }
                      return null;
                    },
                    style: formTextLight,
                    cursorColor: Colors.blueGrey,
                    decoration: InputDecoration(
                      prefixIcon: Icon(
                        Icons.title,
                        color: Colors.blueGrey,
                      ),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(13.0)
                      ),

                      hoverColor: Colors.blueGrey[100],
                      hintText: 'Title' ,
                      hintStyle: smallTextGrey,

                    ),
                    onChanged: (value) {
                      title = value ;
                    },

                  ),
                  SizedBox(height:deviceHeight(context) * 0.03,),
                  Text('Description' , style: menuTextGrey,),
                  SizedBox(height: deviceHeight(context) * 0.01,),
                  TextFormField(
                    validator: (value) {
                      if (value.isEmpty) {
                        return 'Enter description';
                      }
                      return null;
                    },
                    style: formTextLight,
                    cursorColor: Colors.blueGrey,
                    decoration: InputDecoration(
                      prefixIcon: Icon(
                        Icons.title,
                        color: Colors.blueGrey,
                      ),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(13.0)
                      ),
                      hoverColor: Colors.blueGrey[100],
                      hintText: 'description' ,
                      hintStyle: smallTextGrey,

                    ),
                    onChanged: (value) {
                      description = value ;
                    },

                  ),
                  SizedBox(height:deviceHeight(context) * 0.03,),
                  Text('Number of copies' , style: menuTextGrey,),
                  SizedBox(height: deviceHeight(context) * 0.01,),
                  TextFormField(
                    validator: (value) {
                      if (value.isEmpty) {
                        return 'Enter number';
                      }
                      return null;
                    },
                    style: formTextLight,
                    cursorColor: Colors.blueGrey,
                    decoration: InputDecoration(
                      prefixIcon: Icon(
                        Icons.title,
                        color: Colors.blueGrey,
                      ),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(13.0)
                      ),
                      hoverColor: Colors.blueGrey[100],
                      hintText: '0' ,
                      hintStyle: smallTextGrey,

                    ),
                    onChanged: (value) {
                      number = int.parse(value) ;
                    },

                  ),
                  SizedBox(height:deviceHeight(context) * 0.1,),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: deviceWidth(context) * 0.15,
                        child: FittedBox(
                          child: FloatingActionButton(
                              heroTag: 'updateconfirm',
                              child: Icon(Icons.done),
                              onPressed: () async {
                                if (_formKey.currentState.validate()) {
                                  Book b = new Book.fromFrom(title, description, number , '') ;
                                  await b.add() ;
                                  Navigator.pop(context) ;
                                }
                              }),
                        ),
                      ),

                    ],
                  )
                ]
            ),
          ),
        ),
      ),
    );
  }
}