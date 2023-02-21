const router = require('express').Router()
const {isAuth}=require('./userauth.route');
const {addBlog,getAllBlogs, getOneBlog, removeBlog, getBlogFromTo, getNumberBlog}=require('./../controller/Blog');

router.post('/add-blog',isAuth,addBlog);
router.post('/get-all',getAllBlogs);
router.post('/get-one',getOneBlog);
router.post('/remove-one',isAuth,removeBlog);
router.post('/get-from-to',getBlogFromTo)
router.post('/get-number-blog',getNumberBlog);
module.exports=router;