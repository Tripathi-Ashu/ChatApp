import jwk from "jsonwebtoken";

const createTokenAndSaveCookie =(userId, res)=>{
    const token = jwk.sign({userId}, process.env.JWT_TOKEN,{
         expiresIn:"10d"
    });
    res.cookie("jwt", token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict"  
    });
}

export default createTokenAndSaveCookie;