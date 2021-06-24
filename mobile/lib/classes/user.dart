import 'package:libraryM/api/session.dart';
import 'package:libraryM/api/user.dart';

class User {
  static int id ;
  static String username , email , password ;
  static bool isAdmin = true ;
  static ApiUser user ;
  static bool isStored = false ;
}

class Client {
   int id ;

   Client(this.id, this.username, this.email);

  String username , email ;

}