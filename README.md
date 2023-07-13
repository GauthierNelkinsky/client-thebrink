I realised this app for The Brink.

This is the second part of the assignment and i have to realise a User connection backend api and frontend.
This app was realised in around 6 hours that is why the code could be upgraded.


For the backend part I used these library:
 - Express.js
 - Sequelize (+ sequelize-auto, sequelize-cli )
 - cors
 - mysql
 - mysql2

I created two routes
GET /users/?email=:email&password=:password -> Verify if a user exist with email and password
POST /users -> Create a new user

For the frontend part I used Next.js
The login form check the "GET" route
The Signup form check the "POST" route

I hope you will like it,
Gauthier :D