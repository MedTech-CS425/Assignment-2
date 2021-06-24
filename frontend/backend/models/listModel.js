const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({

    name: String,
    user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},
    createdAt: {
        type: Date,
        default: Date.now()

    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },

    items: {

        type: Array,
    }


});

const list = mongoose.model('list', listSchema);

module.exports= list;