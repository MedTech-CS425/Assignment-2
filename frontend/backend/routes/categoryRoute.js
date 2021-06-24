const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const category= require('../models/categoryModel');
const { find, findOne } = require("../models/categoryModel");

router.route("/category").post((req, res) => {

    const name = req.body.name;
    const createdat = req.body.createdat;
    const user_id= req.body.user_id;
    const updatedat = req.body.updatedat;

   
    const Category = new category({

        name,
        user_id,
        createdat,
  
        updatedat

    });


    Category.save();
})





module.exports = router;