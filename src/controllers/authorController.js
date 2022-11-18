const authorModel=require("../Models/AuthorModel")
const blogModel=require("../Models/BlogModel")
const {isValidEmail,isValidString,isValidPassword,idValid} = require("../validator/validator");

const createAuthor= async function(req,res){
try{    const data=req.body;  
    let {fname,lname,title,email,password}=data
    if(!fname && !lname && !title && !password && !email)return res.status(404).send({status:false,message:"All is mandotary"}) 
// if(Object.keys(data).length==0) return 
    if(!fname) return res.status(400).send({status:false,msg:"fname is required"})
    if(!lname) return res.status(400).send({status:false,msg:"lname is required"})
    if(!title) return res.status(400).send({status:false,msg:"title is required"})
    if(!email) return res.status(400).send({status:false,msg:"email is required"})
    if(!password) return res.status(400).send({status:false,msg:"password is required"})

    if(!isValidString(fname)) return res.status(400).send({status:false,msg:"Invalid fname"})
    if(!isValidString(lname))res.status(400).send({status:false,msg:"Invalid lname"})
    if(!isValidEmail(email)) return res.status(400).send({status:false,msg:"Invalid E-MAIlID"})
    if(!isValidPassword(password)) return res.status(400).send({status:false,msg:"Invalid password"})
    let validtitle = ["Mr", "Mrs", "Miss"];
    if (!validtitle.includes(data.title)) {
      return res.status(400).send({ message: "invalid enum" });
    }
    let authorValidEmail= await authorModel.findOne({email:email})
    if(authorValidEmail) return res.status(404).send({status : true,msg:"This email is already registered"})
    
    let authorcreate = await authorModel.create(data)
    res.status(201).send({status:true,data:authorcreate})  
}catch(error){
    res.status(500).send({status:false,message:error.message})
}}
module.exports.createAuthor=createAuthor
 