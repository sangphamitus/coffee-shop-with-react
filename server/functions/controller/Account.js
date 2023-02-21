const {db} =require('../config/firebase');
const bcrypt=require('bcrypt')
const randToken=require('rand-token');
const jwtVariable=require('jsonwebtoken');
const SALT_ROUNDS=10;
const authMethod=  require('../router/auth.methods');

const addAccount = async (req,res)=>{
    try{ 
        const {email,password} =req.body
        const Accounts = db.collection('account')
        const ExistAccount= await Accounts.where('email','==',email).get();
       const hashPassword =bcrypt.hashSync(password,SALT_ROUNDS);
        const data=[];
        ExistAccount.forEach(each=> {
            data.push(each.data())
        })

        if(data.length!==0)
        {
            res.status(200).send({
                status:'fail',
                message:'account already exist'
          
            })
        }else {
            const addElement={
                id:Accounts.doc().id,
                email,
                password:hashPassword
        
            }
            Accounts.doc().set(addElement);
    
            res.status(200).send({
                status:'success',
                message:'account added successfully'
           
            })
        }

        
    }catch(error)
    {
        res.status(500).json(error.message)
    }
}
const updateRefreshToken= async(id,refreshToken)=>{
    
        const Accounts = db.collection('tokens')
        const ExistAccount= await Accounts.where('id','==',id).get();
        const data=[];
        ExistAccount.forEach(each=> {
            data.push(each.data())
        })
        if(data.length===0)
        { 
            const object={
            id,
            refreshToken
            }
            Accounts.doc().set(object)
          
        }
        else{
            if( data[0].refreshToken==="")
            {
                const object={
                    id,
                    refreshToken
                    }
                    Accounts.doc(data.id).set(object)
            }
            return data[0].refreshToken;
        }
      
   
}
const loginAccount = async (req,res)=> {
    try{ 
        const {email,password} =req.body
        const Accounts = db.collection('account')
        const ExistAccount= await Accounts.where('email','==',email).get();
       
        const data=[];
        ExistAccount.forEach(each=> {
            data.push(each.data())
        })

        if(data.length!==1)
        {
            res.status(400).send({
                status:'fail',
                message:'account not exist'
          
            })
        }else {
            const isPasswordValid=bcrypt.compareSync(password,data[0].password)
            
            if(!isPasswordValid){
                return res.status(401).send({status:'fail',message:"Account or password failed"})
            }
            else{
                const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
	            const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

                const dataForAccessToken= {
                    id:data[0].id
                };
                const accessToken=await authMethod.generateToken(
                    dataForAccessToken,
                    accessTokenSecret,
                    accessTokenLife
                )
                if(!accessToken)
                {
                    return res.status(401).send({status:'fail',message:"Logging failed"})
                }


                let refreshToken= randToken.generate(16)
                refreshToken=await updateRefreshToken(data[0].id,refreshToken);

                return res.status(200).send({
                    status:"success",
                    accessToken,
                    refreshToken,
                    email:data[0]
                })
                
            }
          
        }

        
    }catch(error)
    {
        res.status(500).json(error.message)
    }
}
const refreshAccessToken = async (req,res)=> {
    try {
        const {email,refreshToken} =req.body;
        const {x_authorization} =req.headers;

        const accessTokenSecret= process.env.ACCESS_TOKEN_SECRET || jwtVariable.accessTokenSecret;
        const accessTokenLife=process.env.ACCESS_TOKEN_LIFE|| jwtVariable.accessTokenLife;
        const decoded = await authMethod.decodeToken(
            x_authorization,
            accessTokenSecret,
        );
        if (!decoded) {
            return res.status(400).send('Access token invalid.');
        }
       
        const Accounts = db.collection('account')
        const ExistAccount= await Accounts.where('email','==',email).get();
        const data=[];
        ExistAccount.forEach(each=> {
            data.push(each.data())
        })

        if(data.length!==1)
        {
           return res.status(400).send({
                status:'fail',
                message:'account not exist'
          
            })
        }

        const Tokens = db.collection('tokens')
        const ExistTokens= await Tokens.where('id','==',data[0].id).get();
        const dataToken=[];
        ExistTokens.forEach(each=> {
            dataToken.push(each.data())
        })
        if(dataToken.length===0)
        { 
            return res.status(400).send({
                status:'fail',
                message:'access token not accepted not exist'
          
            })
          
        }
      if (refreshToken!==dataToken[0].refreshToken){
		return res.status(400).send('Refresh token invalid.');
	    }   

                const dataForAccessToken= {
                    id:data[0].id
                };
                const accessTokenRenew=await authMethod.generateToken(
                    dataForAccessToken,
                    accessTokenSecret,
                    accessTokenLife
                )
                if(!accessTokenRenew)
                {
                    return res.status(401).send({status:'fail',message:"Logging failed"})
                }

                return res.status(200).send({
                    status:"success",
                    accessToken,
                
                })
    }
    catch(e)
    {
        res.status(500).json(e.message);
    }
}
module.exports.addAccount=addAccount;
module.exports.loginAccount=loginAccount;
module.exports.refreshAccessToken=refreshAccessToken