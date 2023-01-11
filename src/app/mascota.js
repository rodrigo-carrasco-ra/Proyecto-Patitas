const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    usuario: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    filename: {
        type: String
    },
    path: {
        type: String
    },
    originalname: {
        type: String
    },
    mimetype: {
        type: String
    },
    size: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});



module.exports = mongoose.model('mascotas', imageSchema);