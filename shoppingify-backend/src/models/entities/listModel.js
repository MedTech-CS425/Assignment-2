const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }],
    itemCompletions: [{
        type: Boolean,
        required: true
    }],
    status: {
        type: Number,
        enum: [0, 1, 2], // 0: canceled, 1: active, 2: completed
        required: true,
        default: 1
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('List', ListSchema);