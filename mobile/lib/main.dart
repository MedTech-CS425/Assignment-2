import 'package:flutter/material.dart';
import 'package:libraryM/Screens/Home.dart';
import 'package:libraryM/api/session.dart';
import 'package:libraryM/utils.dart';

import 'Screens/Login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(

        primarySwatch: Colors.blue,

        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);


  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  Session session = new Session() ;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: session.testLogged(),
        builder: (context, snapshot) {
            if(!snapshot.hasData)
                return Center(
                child: CircularProgressIndicator(),
                );
            else if(snapshot.hasData) {
                return (snapshot.data == 200) ? Home() : Login() ;
            }
            else return Scaffold(
                backgroundColor: Colors.blueGrey[900],
                body: Center(
                  child: Text('Something \nwrong \nhappened !', style: titleText,),
                ),
              );
    })
    );
  }
}
