const {db} =require('../config/firebase');

const addOrder=async (req,res)=>{
    try{ 
        const {name,phone,address,message,order} =req.body;
        const orders = db.collection('orders').doc();
        const addElement={
            id:orders.id,
            isDelivered:false,
            orderDay:new Date(),
            name,
            phone,
            address,
            message,
            order
    
        }
        orders.set(addElement);

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
const getAllOrder=async(req,res)=>{
    try
    {
        const orders = await db.collection('orders').get();
        const data= orders.docs.map(doc=> doc.data());
        const ordersId=data.map(each=>each.id);
        res.status(200).send({
            status:'success',
            message:'product fetched successfully',
            data: ordersId
        });

    }
    catch(error)
    {
        res.status(500).json(error.message)
    }
}
module.exports.addOrder=addOrder;
module.exports.getAllOrder=getAllOrder;