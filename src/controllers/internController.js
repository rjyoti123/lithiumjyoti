const collegeModels = require("../models/collegeModels")
const internModel = require("../models/internModel")


const interData = async function (req, res) {  
    try {
        const data = req.body
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please provide data" })
        const { name, email, mobile, collegeName } = req.body
        if (!name) return res.status(400).send({ status: false, message: "name is required." })
        if (!email) return res.status(400).send({ status: false, message: "email is required." })
        if (!mobile) return res.status(400).send({ status: false, message: "mobile is required." })
        if (!collegeName) return res.status(400).send({ status: false, message: "collegename is required." })

        const Name =/^[A-Za-z][A-Za-z ._]{5,20}$/
    
        if (!Name.test(name)) return res.status(400).send({ status: false, message: "Invalid name." })

        const validEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if (!validEmail.test(email)) return res.status(400).send({ status: false, message: "Invalid email." })

        const validMobile = (/^(\+\d{1,3}[- ]?)?\d{10}$/)

        if (!validMobile.test(mobile)) return res.status(400).send({ status: false, message: "Invalid mobile." })

        
     const validName = (/^[a-z .]{3,50}$/)
     if (!validName.test(collegeName)) return res.status(400).send({ status: false, message: "Invalid collegename." }) 

        

        const college = await collegeModels.findOne({name:collegeName,isDeleted:false})
        if(!college)  return res.status(400).send({ status: false, message: "No such college found." })
        


        const existUser = await internModel.findOne({ email });
        if (existUser) return res.status(400).send({ status: false, message: 'This email already registered.' });


        const existmobile = await internModel.findOne({ mobile });
        if (existmobile) return res.status(400).send({ status: false, message: 'This mobile already registered.' });

        data.collegeId=college._id

        

        const result = await internModel.create(data)
        res.header('Access-Control-Allow-Origin','*')
        res.status(201).send({ status: true, data: {isDeleted : result.isDeleted,
        name : result.name,
        email : result.email,
        mobile : result.mobile,
        collegeId : result.collegeId}})
        

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports.interData = interData