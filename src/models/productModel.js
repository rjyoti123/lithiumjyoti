const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    category:String,
    price:{type:Number,
           require:true
         }

}, { timestamps: true });


module.exports = mongoose.model('NewProduct', bookSchema) //users