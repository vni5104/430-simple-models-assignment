const mongoose = require('mongoose');

//variable for Dog Model
let DogModel;

//variable for Dog Schema
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

//build Dog Model based on Dog Schema
DogModel = mongoose.model('Dog', DogSchema);

//export Dog Model
module.exports = DogModel;