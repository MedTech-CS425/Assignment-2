import 'package:flutter/material.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/main.dart';
import 'package:libraryM/utils.dart';
import 'package:libraryM/Screens/Home.dart';

import 'SignUp.dart';

class Login extends StatefulWidget {

  @override
  LoginState createState() => LoginState() ;
}

class LoginState extends State<Login> {

  String username , password ;
  ApiUser user = new ApiUser() ;

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white70,
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: EdgeInsets.symmetric(vertical: deviceHeight(context) * 0.019 , horizontal: deviceWidth(context) * 0.06),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children : <Widget> [
                      Text('Login' , style: titleText ,),
                      SizedBox(height: deviceHeight(context) * 0.035,),
                      Text('Username' , style: menuTextGrey,),
                      SizedBox(height: deviceHeight(context) * 0.01,),
                      TextFormField(
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
                          hintText: 'Username' ,
                          hintStyle: smallTextGrey,

                        ),
                        onChanged: (value) {
                          username = value ;
                        },

                      ),
                      SizedBox(height:deviceHeight(context) * 0.03,),
                      Text('Password' , style: menuTextGrey,),
                      SizedBox(height: deviceHeight(context) * 0.01,),
                      TextFormField(
                        obscureText: true,
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
                          hintText: 'Password' ,
                          hintStyle: smallTextGrey,

                        ),
                        onChanged: (value) {
                          password = value ;
                        },

                      ),
                      SizedBox(height:deviceHeight(context) * 0.03,),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: deviceWidth(context) * 0.15,
                            child: FittedBox(
                              child: FloatingActionButton(
                                  heroTag: 'login1',
                                  child: Icon(Icons.login_outlined),
                                  onPressed: () async {
                                    user.username = username ;
                                    user.password = password ;
                                    await user.log() ;
                                    Navigator.pop(context) ;
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(builder: (context) => MyApp())
                                    ) ;
                                  }),
                            ),
                          ),
                          SizedBox(width: deviceWidth(context) * 0.1) ,
                          Container(
                            width: deviceWidth(context) * 0.15,
                            child: FittedBox(
                              child: FloatingActionButton(
                                  heroTag: 'sign',
                                  child: Icon(Icons.fiber_new_outlined),
                                  onPressed: ()  {
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(builder: (context) => SignUp())
                                    ) ;
                                  }),
                            ),
                          ),
                        ],
                      )

                    ]
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}