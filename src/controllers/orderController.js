const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")

const createOrder = async function(req,res){
 let data = req.body
 
const user = await UserModel.find({_id:req.body.userId})
const product = await ProductModel.find({_id:req.body.productId})
if(user.length==0){
    return res.send("Please enter valid userID")
}else if(product.length==0){
    return res.send("Please enter valid ProductID")
}

const update2 = await UserModel.findByIdAndUpdate({_id:data.userId},{isFreeAppUser:req.headers["isfreeappuser"]})
const freeuser = await UserModel.find({_id:req.body.userId}).select({isFreeAppUser:1,_id:0})
const a = freeuser[0].isFreeAppUser
if(a==false){
    let balance1 =  await UserModel.find({_id:req.body.userId}).select({balance:1,_id:0})
    let userbalance=balance1[0].balance
    let productprice= req.body.amount
    let newbalance = userbalance-productprice
    if(newbalance<0){
      return  res.send({msg:"User has not sufficient balance"})
    }
    let update1 = await UserModel.findByIdAndUpdate({_id:req.body.userId},{balance:newbalance})
    let saveorder = await OrderModel.create(data)
    res.send({msg:saveorder})
}else if(a==true){
    req.body.amount = 0
    let saveorder = await OrderModel.create(data)
    res.send({msg:saveorder})
}

}


module.exports.createOrder = createOrder