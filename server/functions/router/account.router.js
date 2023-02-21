
const router = require('express').Router()
const {isAuth}=require('./userauth.route');
const {addAccount,loginAccount,refreshAccessToken} =require('../controller/Account');

router.post('/add-account',addAccount);
router.post('/login',loginAccount);
router.post('/refresh-access-token',isAuth,refreshAccessToken);
module.exports=router;