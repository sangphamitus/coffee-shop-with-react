const { customerContact} = require('../controller/Contact');

const router=require('express').Router();

router.post('/add-contact',customerContact);


module.exports=router;