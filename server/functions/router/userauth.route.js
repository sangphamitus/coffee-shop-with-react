
const authMethod= require('./auth.methods');

exports.isAuth=async (req,res,next)=> {
    
    const accessTokenFromHeader =req.headers.x_authorization;
    if(!accessTokenFromHeader){
        return res.status(401).send('Access Token not available');
    }

    const accessTokenSecret=process.env.ACCESS_TOKEN_SECRET;

    const verified =await authMethod.verifyToken(
        accessTokenFromHeader,
        accessTokenSecret
    );

    if (!verified){
        return res.status(401)
                    .send('No permittion access');
    }
    //find account
    return next();

}