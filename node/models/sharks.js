const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Shark = new Schema ({
        name: {type: String, required: true},
        character: {type: String, required: true},
    });
module.exports = mongoose.model('Shark', Shark);