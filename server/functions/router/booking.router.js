const { customerBooking } = require('../controller/Booking');

const router=require('express').Router();

router.post('/add-booking',customerBooking);


module.exports=router;