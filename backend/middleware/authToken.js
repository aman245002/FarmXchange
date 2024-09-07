async function authToken(req,res,next){
try{
const token=req.cookies?.token ||req.header
}
catch(err){
    res.status(400).json({
        message:err.message||err,
        data:[],
        error:true,
        success:false
    })
}
}