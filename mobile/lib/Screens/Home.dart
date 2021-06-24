import 'package:flutter/material.dart';
import 'package:libraryM/Screens/Books.dart';
import 'package:libraryM/Screens/Clients.dart';
import 'package:libraryM/classes/user.dart';


import 'Chats.dart';

class Home extends StatefulWidget {

  @override
  HomeState createState() => HomeState() ;
}

class HomeState extends State<Home> {

  Widget build(BuildContext context) {
    return Scaffold(

      body: (User.isAdmin) ? (_selectedIndex == 0) ? Books(false) : (_selectedIndex == 1) ? Clients() : Chats()

      : (_selectedIndex == 0) ? Books(false) : (_selectedIndex == 1) ? Books.byClient(true,User.user.id) : Chats(),

      bottomNavigationBar: BottomNavigationBar(
        items: (User.isAdmin) ? [
          BottomNavigationBarItem(
              label: 'Books',
              icon: Icon(Icons.book),
          ),

          BottomNavigationBarItem(
              label: 'Clients',
              icon: Icon(Icons.person)
          ) ,
          BottomNavigationBarItem(
              label: 'chats',
              icon: Icon(Icons.chat)
          ),
        ] : [
          BottomNavigationBarItem(
          label: 'Books',
            icon: Icon(Icons.book),
          ),
          BottomNavigationBarItem(
            label: 'My Books',
            icon: Icon(Icons.bookmark_rounded),
          ),
          BottomNavigationBarItem(
              label: 'chats',
              icon: Icon(Icons.chat)
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue[500],
        onTap: _onItemTapped,
      ),
    );
  }
  int _selectedIndex = 0 ;
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}