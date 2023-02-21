const router=require('express').Router()
const {addProduct,
    updatePrice,
    updateImage,
    getAllProduct,
    getOneProduct,
    removeProduct } =require('./../controller/Product');
const { isAuth } = require('./userauth.route');


router.post("/add-product",isAuth,addProduct);
router.post("/update-price",isAuth,updatePrice);
router.post("/update-img",isAuth,updateImage);
router.post("/get-all",getAllProduct);
router.post("/get-one",getOneProduct);
router.post("/delete-product",isAuth,removeProduct)

module.exports=router;