 
// const { default: mongoose }  require ('mongoose') 
const bookModel=require('../models/booksModel')

const takeBook=async function(req,res){
    const bookData=req.body
  await bookModel.create(bookData)
    res.send({msg:takeBook})

}
const getData=async function(req,res){
    const findData=await bookModel.find()
    res.send(findData)
}

module.exports.takeBook=takeBook
module.exports.getData=getData

