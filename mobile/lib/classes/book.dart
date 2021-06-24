import 'package:libraryM/api/book.dart';

class Book {

  String title , description , img , date  ;
  int id , nbr;
  double lat , longitude ;

  List <String> categories = <String>['Sante','Electroniques','Transportation','Papier'] ;

  Future add () async {
    ApiPost api = new ApiPost() ;
    api.add(this) ;
  }

  Book(this.id , this.title , this.description , this.nbr ,this.img , this.date);
  Book.fromFrom( this.title , this.description , this.nbr ,this.img);


}