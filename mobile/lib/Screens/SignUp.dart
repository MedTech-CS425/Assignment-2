import 'package:flutter/material.dart';
import 'package:libraryM/api/user.dart';
import 'package:libraryM/utils.dart';

import '../main.dart';
import 'Home.dart';

class SignUp extends StatefulWidget {
  @override
  SignUpState createState() => SignUpState() ;
}

class SignUpState extends State<SignUp> {

  String username, password, confirmPass, fullname, email;

  ApiUser user = new ApiUser();

  final _formKey = GlobalKey<FormState>();
  int loginTest;

  initState()  {
    super.initState();

  }

  Widget build(BuildContext context) {
      return Scaffold(
        body: FutureBuilder<Object>(
            future: user.session.testLogged(),
            builder: (context, snapshot) {
              if (snapshot.data != 200)
                return Center(
                  child: SingleChildScrollView(
                    child: Form(
                      key: _formKey,
                      child: Column(
                        children: [
                          Padding(
                            padding: EdgeInsets.symmetric(
                                vertical: deviceHeight(context) * 0.019,
                                horizontal: deviceWidth(context) * 0.06),
                            child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget>[
                                  Text('Sign Up', style: titleText,),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.035,),
                                  Text('Username', style: menuTextGrey,),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.01,),
                                  TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Enter Username';
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
                                          borderRadius: BorderRadius.circular(
                                              13.0)
                                      ),

                                      hoverColor: Colors.blueGrey[100],
                                      hintText: 'Username',
                                      hintStyle: smallTextGrey,

                                    ),
                                    onChanged: (value) {
                                      username = value;
                                    },

                                  ),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.03,),
                                  Text('Email', style: menuTextGrey,),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.01,),
                                  TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Enter email';
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
                                          borderRadius: BorderRadius.circular(
                                              13.0)
                                      ),
                                      hoverColor: Colors.blueGrey[100],
                                      hintText: 'email',
                                      hintStyle: smallTextGrey,

                                    ),
                                    onChanged: (value) {
                                      email = value;
                                    },

                                  ),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.03,),
                                  Text('Password', style: menuTextGrey,),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.01,),
                                  TextFormField(
                                    validator: (value) {
                                      if (value.isEmpty) {
                                        return 'Enter Password';
                                      }
                                      return null;
                                    },
                                    obscureText: true,
                                    style: formTextLight,
                                    cursorColor: Colors.blueGrey,
                                    decoration: InputDecoration(
                                      prefixIcon: Icon(
                                        Icons.title,
                                        color: Colors.blueGrey,
                                      ),
                                      border: OutlineInputBorder(
                                          borderRadius: BorderRadius.circular(
                                              13.0)
                                      ),
                                      hoverColor: Colors.blueGrey[100],
                                      hintText: 'Password',
                                      hintStyle: smallTextGrey,

                                    ),
                                    onChanged: (value) {
                                      password = value;
                                    },

                                  ),
                                  SizedBox(
                                      height: deviceHeight(context) * 0.03),
                                  Text(
                                    'Confirm Password', style: menuTextGrey,),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.01,),
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
                                          borderRadius: BorderRadius.circular(
                                              13.0)
                                      ),
                                      hoverColor: Colors.blueGrey[100],
                                      hintText: 'Password',
                                      hintStyle: smallTextGrey,

                                    ),
                                    validator: (value) {
                                      if (value != password)
                                        return 'password doesn''t match';
                                      return null;
                                    },
                                    onChanged: (value) {
                                      confirmPass = value;
                                    },

                                  ),
                                  SizedBox(
                                    height: deviceHeight(context) * 0.05,),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Container(
                                        width: deviceWidth(context) * 0.15,
                                        child: FittedBox(
                                          child: FloatingActionButton(
                                              heroTag: 'loginbtn#',
                                              child: Icon(Icons.login_outlined),
                                              onPressed: () async {
                                                if (_formKey.currentState
                                                    .validate()) {
                                                  user.username = username;
                                                  user.email = email;
                                                  user.password = password;

                                                  await user.register();
                                                  await user.log();
                                                  Navigator.pop(context);
                                                  Navigator.push(
                                                      context,
                                                      MaterialPageRoute(
                                                          builder: (context) =>
                                                              MyApp())
                                                  );
                                                }
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
              else
                return MyApp();
            }
        ),
      );
  }
}