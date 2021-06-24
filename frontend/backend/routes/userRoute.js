
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const user = require('../models/userModel');

router.route("/register").post((req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
    const User = new user({

        username,
        email,
        password
  
    });


    User.save();
})







module.exports = router;