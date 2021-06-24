const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const  multer  =  require ( 'multer' ) ;

const item = require("../models/itemModel");


const  storage  =  multer . diskStorage ( {
    //destination for files
    destination: function (request, file, callback) {
        callback(null, './public/uploads/Image');
    } ,

    //add back the extension
    filename: function (request, file, callback) {
        callback(null, Date.now() + file.originalname);
    } ,
} ) ;

// upload parameters for clouds
const  upload  =  multer ( {
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    } ,
} ) ;

router.post("/item",upload.single('image'),(req, res) => {

    const name = req.body.name;
    const category_id = req.body.category_id;
    const note = req.body.note;
    const image = req.body.image;


    const  Item  =  new  item ( {

        name,
        category_id,
        note ,
        picture

    } ) ;


    Item . save ( ) ;
} )

router.route('/home').get(async (req, res) => {
    try {
        res.send(await item.find());

    }
    catch (error) {
        res.send(error);
    }
} ) ;

router.route('/item').delete(async (req, res) => {

    try {
        await item.findOneAndDelete({ id: req.body.id });
        res.send("it was deleted");
    }
    catch (error) {
        res.send(error);
    }
} ) ;

module.exports = router;