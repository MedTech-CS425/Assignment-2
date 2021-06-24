class Chat {
  String secondUser ;

  String lastMsg;

  int id , secondId ;

  List<Message> messages  ;

  Chat(this.secondUser, this.id , this.secondId ,this.lastMsg);

}

class Message {
  String message ;
  String time ;
  int currentUser ;
  int room ;
  var image ;
  bool hasImage = false ;

  Message.withImage(this.message, this.image ,  this.time, this.currentUser , this.room) : hasImage = true ;
  Message(this.message, this.time, this.currentUser , this.room);

  toString() {
    return '{"message" : ' + '"' + message + '"' + ', "hasImage" :' + '"' + hasImage.toString() + '"' +'}' ;
  }
}