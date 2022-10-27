const mongoose = require('mongoose');

const bookSchema=new mongoose.Schema ( {
    bookName:{
        type:String,
        require:true
    },

    authorName: String,
    category: String,
    year: Number,
    yourName:{
        type:String,
    }


},{timestamps:true})
module.expoerts = mongoose.model("Book1", bookSchema)



