const {db} =require('../config/firebase');

const addMenu=async (req,res)=>{
    try{ 
        const { imgsrc,cafename, price,discription} =req.body;
        const menus = db.collection('menu').doc();
        const addElement={
            id:menus.id,
            imgsrc,
            cafename,
            price,
            discription
        }
        menus.set(addElement);

        res.status(200).send({
            status:'success',
            message:'menu added successfully',
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
const getAllMenu= async (req,res)=> {
    try
    {
        const menu = await db.collection('menu').get();
        const data= menu.docs.map(doc=> doc.data());
      
        res.status(200).send({
            status:'success',
            message:'product fetched successfully',
            data: data
        });

    }
    catch(error)
    {
        res.status(500).json(error.message)
    }
}
const getOneMenu = async (req,res )=> {
   
    try {
        const {cafename} = req.body;
        const products= db.collection('menu');
        const product= await products.where('cafename','==',cafename).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })

        res.status(200).send({
            status:'success',
            message:'menu get successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const removeMenu=async (req,res)=> {
    try {
        const {cafename} = req.body;
        const menus= db.collection('menu');       
        const menu= await menus.where('cafename','==',cafename).get()
        
        const data=[];
        menu.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
       
            menus.doc(doc.id).delete()

        })

        res.status(200).send({
            status:'success',
            message:'menu delete successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports.addMenu=addMenu;
module.exports.updatePrice=updatePrice;
module.exports.updateImage=updateImage;
module.exports.updateDisciption=updateDisciption;
module.exports.getAllMenu=getAllMenu;
module.exports.removeMenu=removeMenu;       
module.exports.getOneMenu=getOneMenu;