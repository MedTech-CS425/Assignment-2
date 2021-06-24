const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const list = require('../models/listModel');
const { find, findOne } = require("../models/categoryModel");

router.route("/category").post((req, res) => {

    const name = req.body.name;
    const createdat = req.body.createdat;
    const user_id = req.body.user_id;
    const updatedat = req.body.updatedat;


    const List = new list({

        name,
        user_id,
        createdat,

        updatedat

    });


    List.save();
})

router.route("/home").post((req, res) => {

const item = req.body.add;

items.add(item);
});






module.exports = router;