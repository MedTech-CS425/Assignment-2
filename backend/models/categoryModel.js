const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({

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
}
});


const category = mongoose.model('category', categorySchema);

module.exports= category;