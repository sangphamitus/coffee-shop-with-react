const {db} =require('../config/firebase');

const addProduct= async (req,res)=> {
    const {img,namebag,price} =req.body;
    try {
        const products= db.collection('products').doc();
        const productObject ={
            id:products.id,
            img,
            namebag,
            price
        };

        products.set(productObject);

        res.status(200).send({
            status:'success',
            message:'product added successfully',
            data:productObject
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const updatePrice= async (req,res)=> {
    const {namebag,price} =req.body;
    try {
        
        const products= db.collection('products');
  
        const product= await products.where('namebag','==',namebag).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
            const object={
                id:doc.id,
                img:doc.img,
                namebag:doc.namebag,
                price
            }
            products.doc(doc.id).set(object)

        })
        
        
        res.status(200).send({
            status:'success',
            message:'product update price successfully',
        
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const updateImage= async (req,res)=> {
    const {img,namebag} =req.body;
    try {
        
        const products= db.collection('products');
  
        const product= await products.where('namebag','==',namebag).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
            const object={
                id:doc.id,
                img,
                namebag:doc.namebag,
                price:doc.price
            }
            products.doc(doc.id).set(object)

        })
        
        
        res.status(200).send({
            status:'success',
            message:'product update img successfully',
        
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const getAllProduct= async (req,res)=> {
    try
    {
        const products = await db.collection('products').get();
        const data= products.docs.map(doc=> doc.data());
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
const getOneProduct = async (req,res )=> {
   
    try {
        const {namebag} = req.body;
        const products= db.collection('products');
        const product= await products.where('namebag','==',namebag).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })

        res.status(200).send({
            status:'success',
            message:'product update  successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}
const removeProduct=async (req,res)=> {
    try {
        const {namebag} = req.body;
        const products= db.collection('products');       
        const product= await products.where('namebag','==',namebag).get()
        
        const data=[];
        product.forEach(each=> {
            data.push(each.data())
        })
        data.forEach(doc=>{
       
            products.doc(doc.id).delete()

        })

        res.status(200).send({
            status:'success',
            message:'product delete successfully',
            data: data
        });
    
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports.addProduct=addProduct;
module.exports.updatePrice=updatePrice;
module.exports.updateImage=updateImage;
module.exports.getAllProduct=getAllProduct;
module.exports.getOneProduct=getOneProduct;
module.exports.removeProduct=removeProduct;