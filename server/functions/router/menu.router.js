const Router=require('express').Router();
const {addMenu,
      updatePrice,
      updateImage,
      updateDisciption,
      getAllMenu,
        removeMenu,
      getOneMenu} =require('./../controller/Menu');

Router.post('/add-menu',addMenu);
Router.post('/update-price',updatePrice);
Router.post('/update-imgsrc',updateImage);
Router.post('/update-discription',updateDisciption);
Router.post('/get-all',getAllMenu)
Router.post('/get-one',getOneMenu)
Router.post('/remove-menu',removeMenu)

module.exports=Router