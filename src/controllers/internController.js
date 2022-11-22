const mongoose = require("mongoose")
const internModel = require("../models/internModel")
const interData = async function (req, res) {
    try {
        const data = req.body
        const { name, email, mobile, collegeId } = req.body
        if (!name) return res.status(400).send({ status: false, message: "name is required." })
        if (!email) return res.status(400).send({ status: false, message: "email is required." })
        if (!mobile) return res.status(400).send({ status: false, message: "mobile is required." })
        if (!collegeId) return res.status(400).send({ status: false, message: "collegeId is required." })

        const validName = (/^[a-zA-Z .]{3,20}$/)
        if (!validName.test(name)) return res.status(400).send({ status: false, message: "Invalid name." })
        const validEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if (!validEmail.test(email)) return res.status(400).send({ status: false, message: "Invalid email." })
        const validMobile = (/^(\+\d{1,3}[- ]?)?\d{10}$/)

        if (!validMobile.test(mobile)) return res.status(400).send({ status: false, message: "Invalid mobile." })

        const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId(collegeId)) return res.status(400).send({ status: false, message: "Invalid collegeId" })


        const existUser = await internModel.findOne({ email });
        if (existUser) return res.status(400).send({ status: false, message: 'This email already registered.' });


        const existmobile = await internModel.findOne({ mobile });
        if (existmobile) return res.status(400).send({ status: false, message: 'This mobile already registered.' });

        const result = await internModel.create(data)
        res.status(201).send({ status: true, data: result })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports.interData = interData