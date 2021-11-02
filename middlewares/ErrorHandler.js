const jwt=require('jsonwebtoken');

const ErrorHandler = (err, req, res, next) => {
    const ErrorCode=res.statusCode===200?500:res.statusCode;
    res.statusCode=ErrorCode;
    res.json({
        message:err.message,
    })
}

//verify token
const verifyToken = (req, res, next) => {
    let token=req.headers.authorization;
    if(!token) return res.status(401).json({message:'No token provided'});
    token=token.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.ACCESS_TOKEN);
        console.log("decooded",decoded);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({message:'Invalid token'});
    }
}


module.exports={
    ErrorHandler,verifyToken
};