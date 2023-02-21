const {db} =require('../config/firebase');

const addBlog=async (req,res)=>{
    try{ 
        const { img,postdate,posthead,postcontent} =req.body;
        const menus = db.collection('blogs').doc();
        const addElement={
            idpost:menus.id,
            img,
            postdate,
            posthead,
            postcontent
        }
        menus.set(addElement);

        res.status(200).send({
            status:'success',
            message:'blog added successfully',
            data:addElement
        })
    }catch(error)
    {
        res.status(500).json(error.message)
    }
}
const updatePrice= async (req,res)=> {

    try {
        const {cafename,price} =req.body;
        const menus= db.collection('menu');
  
        const menu= await menus.where('cafename','==',cafename).get()
        
        const data=[];
        menu.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
            const object={
                id:doc.id,
                imgsrc:doc.imgsrc,
                cafename:doc.cafename,
                price,
                discription:doc.discription
            }
            menus.doc(doc.id).set(object)

        })
        
        
        res.status(200).send({
            status:'success',
            message:'menu price update price successfully',
        
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const updateImage= async (req,res)=> {

    try {
        const {cafename,imgsrc} =req.body;
        const menus= db.collection('menu');
  
        const menu= await menus.where('cafename','==',cafename).get()
        
        const data=[];
        menu.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
            const object={
                id:doc.id,
                imgsrc,
                cafename:doc.cafename,
                price:doc.price,
                discription:doc.discription
            }
            menus.doc(doc.id).set(object)

        })
        
        
        res.status(200).send({
            status:'success',
            message:'menu price update image successfully',
        
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const updateDisciption= async (req,res)=> {

    try {
        const {cafename,discription} =req.body;
        const menus= db.collection('menu');
  
        const menu= await menus.where('cafename','==',cafename).get()
        
        const data=[];
        menu.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
            const object={
                id:doc.id,
                imgsrc:doc.imgsrc,
                cafename:doc.cafename,
                price:doc.price,
                discription,
            }
            menus.doc(doc.id).set(object)

        })
        
        
        res.status(200).send({
            status:'success',
            message:'menu discription successfully',
        
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const getAllBlogs= async (req,res)=> {
    try
    {
        
        const menu = await db.collection('blogs').get();
        const data= menu.docs.map(doc=> doc.data());
        res.status(200).send({
            status:'success',
            message:'Blogs fetched successfully',
            data: data
        });

    }
    catch(error)
    {
        res.status(500).json(error.message)
    }
}
const getOneBlog = async (req,res )=> {
   
    try {
        const {idpost} =req.body
        const products= db.collection('blogs');
        const product= await products.where('idpost','==',idpost).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })

        res.status(200).send({
            status:'success',
            message:'Blog get successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const getBlogFromTo=async (req,res)=> {
    try
    {
        const {from,to}=req.body;
        const menu = await db.collection('blogs').get();
        const data= menu.docs.map(doc=> doc.data());
        const result=data.splice(Number(from),Number(to));
        res.status(200).send({
            status:'success',
            message:'Blogs from to fetched successfully',
            data: result
        });

    }
    catch(error)
    {
        res.status(500).json(error.message)
    }
}
const removeBlog=async (req,res)=> {
    try {
        const {idpost} =req.body
        const products= db.collection('blogs');
        const product= await products.where('idpost','==',idpost).get();

        const data=[];
        menu.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
       
            menus.doc(doc.id).delete()

        })

        res.status(200).send({
            status:'success',
            message:'blog delete successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const getNumberBlog=async (req,res)=>{
    try
    {
        
        const menu = await db.collection('blogs').get();
        const data= menu.docs.map(doc=> doc.data());
        res.status(200).send({
            status:'success',
            message:'Blogs fetched successfully',
            data: data.length
        });

    }
    catch(error)
    {
        res.status(500).json(error.message)
    }
}
module.exports.addBlog=addBlog;
module.exports.getAllBlogs=getAllBlogs;
module.exports.getOneBlog=getOneBlog;
module.exports.removeBlog=removeBlog;
module.exports.getBlogFromTo=getBlogFromTo;
module.exports.getNumberBlog=getNumberBlog;