import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:libraryM/api/session.dart';
import 'package:libraryM/classes/user.dart';
import 'package:http/http.dart' as http;
import 'package:libraryM/classes/book.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ApiPost {
  Session session = new Session();

  Future add(book) async {
    /*Dio dio = new Dio();
    FormData fd = new FormData.fromMap(<String, dynamic>{
      'image': await MultipartFile.fromFile(image.path, filename: 'hello'),
    });

    var req = await dio.post(
        session.baseUrl + 'uploadBook/' + type, data: fd, options: Options(
        method: 'POST',
        headers: await session.getSession(),
        responseType: ResponseType.json // or ResponseType.JSON
    ));*/

    //if(req.statusCode != 400) {
      var body ;
        body =  {
          'title': book.title,
          'description': book.description,
          'Nbr': book.nbr.toString()
        } ;

      http.Response res = await http.post(session.baseUrl + 'createBook/',
          headers: await session.getSession(),
          body: body
      );

      return res.body;
   // }
    //else return -1 ;
  }

  Future update(book) async {
    var body ;
    body =  {
      'title': book.title,
      'description': book.description,
      'Nbr': book.nbr.toString()
    } ;

    http.Response res = await http.put(session.baseUrl + 'update/' + book.id,
        headers: await session.getSession(),
        body: body
    );

    return res.body;
  }


  Future delete (id) async {
    http.Response res = await http.delete(session.baseUrl + 'deleteBook/' + id.toString() ,
        headers: await session.getSession()
    );

    print(res.body) ;
  }

  Future getAll() async {
    http.Response res = await http.get(session.baseUrl + 'books' , headers: await session.getSession()) ;
    print(res.body) ;
    if(res.statusCode == 200) {
      var books = jsonDecode(res.body) ;
      var allBooks = [] ;

      for (var b in books)
        if(b != null)
          allBooks.add(
            new Book(b['id'], b['title'], b['description'], b['Nbr'] , '' , b['endDate'])
          );
        return allBooks ;
    }

  }

  Future borrow(id) async {
    http.Response res = await http.get(session.baseUrl + 'borrow/' + id.toString() , headers: await session.getSession()) ;
    return res.body ;
  }

  Future getByClient(id) async {
    http.Response res = await http.get(session.baseUrl + 'mybooks/' + id.toString() , headers: await session.getSession()) ;
    print(res.body) ;
    if(res.statusCode == 200) {
      var books = jsonDecode(res.body) ;
      var allBooks = [] ;

      for (var b in books)
        if(b != null)
          allBooks.add(
              new Book(b['id'], b['title'], b['description'], b['Nbr'] , '' , b['endDate'])
          );
      return allBooks ;
    }

  }



}