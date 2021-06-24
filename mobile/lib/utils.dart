
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

deviceHeight(context) {
  return MediaQuery
      .of(context)
      .size
      .height;
}

deviceWidth(context) {
  return MediaQuery
      .of(context)
      .size
      .width;
}

final titleText = TextStyle(fontSize: 35, fontWeight: FontWeight.bold , color: Colors.blueGrey[600] ) ;
final titleTextWhite = TextStyle(fontSize: 36, fontWeight: FontWeight.bold , color : Colors.white );
final titleTextWhite70 = TextStyle(fontSize: 36, fontWeight: FontWeight.bold , color : Colors.white70 );

final subtitleText = TextStyle(fontSize: 25, fontWeight: FontWeight.bold , color: Colors.blueGrey[600] ) ;
final subtitleTextWhite = TextStyle(fontSize: 25, fontWeight: FontWeight.bold , color : Colors.white );
final subtitleTextRed = TextStyle(fontSize: 25, fontWeight: FontWeight.bold , color: Colors.red ) ;
final subtitleTextWhite70 = TextStyle(fontSize: 25, fontWeight: FontWeight.bold , color : Colors.white70 );


final secText = TextStyle(fontSize: 18, fontWeight: FontWeight.w800 , color: Colors.white) ;
final secTextBlack = TextStyle(fontSize: 18, fontWeight: FontWeight.bold , color: Colors.blueGrey[600]) ;
final secTextRed = TextStyle(fontSize: 18, fontWeight: FontWeight.bold , color: Colors.red[600]) ;

final menuTextBlack = TextStyle(fontSize: 17.5, fontWeight: FontWeight.w800 , color: Colors.black) ;
final menuTextGrey = TextStyle(fontSize: 17.5, fontWeight: FontWeight.w800 , color: Colors.blueGrey[600]) ;
final menuTextWhite = TextStyle(fontSize: 17.5, fontWeight: FontWeight.w800 , color: Colors.white) ;

final smallTextBlack = TextStyle(fontSize: 14, fontWeight: FontWeight.w800 , color: Colors.black) ;
final smallTextGrey = TextStyle(fontSize: 14, fontWeight: FontWeight.w800 , color: Colors.blueGrey[500]) ;
final smallTextWhite = TextStyle(fontSize: 14 , color: Colors.white) ;

final formTextLight = TextStyle(fontSize: 14, fontWeight: FontWeight.w800 , color: Colors.blueGrey[500]) ;
final formTextDark = TextStyle(fontSize: 14, fontWeight: FontWeight.w800 , color: Colors.white70) ;
