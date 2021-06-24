const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    note: String,
    image: String
});

const item = mongoose.model('item', itemSchema);

module.exports= item;