This project is a Library management app developed for both iOS and android using FLutter/Dart.
The backend is developed in Node/Express with Mysql database that automatically installs using the db.sql script.

#Getting Started:

- Change the server address in mobile/lib/api/session
- Run the flutter app in your phone using Flutter run command
- Change the core/pool.js credentials so that you can connect to the database
- Install dependencies using npm i
- Run db.sql script
- npm run

and you're done

This project handles the required tasks in the assignment but it just uses books instead of items because it might make more sens.

It handles session and stores user data in the phone so that you don't have to connect each time

Users are divided into admins and non admins and only admins can operate on books

Admins might start a chat with any user

------

the connection between the backend and the app is made in the lib/api directory.

Enjoy!  
