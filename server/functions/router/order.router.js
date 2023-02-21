const router=require('express').Router();
const {addOrder,getAllOrder} =require('../controller/Order');
const {isAuth}=require('./userauth.route');

router.post('/add-order',addOrder);
router.post('/all-orders',isAuth,getAllOrder);
module.exports=router;