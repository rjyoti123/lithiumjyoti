const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
let savedUser = await UserModel.create(data)
    res.send({msg:savedUser})
}

module.exports.createUser= createUser