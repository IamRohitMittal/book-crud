// Create a constant mongoose variable
const mongoose = require('mongoose');

// Create the variable book schema.
var bookSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: 'This student needs name.'
    },
    name: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    authorName: {
        type: String
    }
});

mongoose.model('Book', bookSchema);