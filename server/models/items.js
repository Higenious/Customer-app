const mongoose = require('mongoose');
const Schema    = mongoose.Schema;

//createing Scehma

const ItemsSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    date : {
        type :Date,
        default : Date.now
    },
    email : {
        type: String,

    }
});

 
module.exports = Item = mongoose.model('items', ItemsSchema);
