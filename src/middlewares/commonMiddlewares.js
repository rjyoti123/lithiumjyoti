const test1 = function(req,res,next){
    let header1 = req.headers["isfreeappuser"]
    if(!header1){
       return res.send("please enter header")
    }else{
        req.body.isFreeAppUser=req.headers["isfreeappuser"]
    }
    next()
}
module.exports.test1=test1