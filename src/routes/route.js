const express = require("express")
const router = express.Router()
const collegeController = require('../controllers/collegeController')
const interController = require('../controllers/internController')


router.post("/functionup/interns",interController.interData)
router.post('/functionup/colleges',collegeController.createCollege)
router.get('/functionup/collegeDetails',collegeController.getInterns)


module.exports=router