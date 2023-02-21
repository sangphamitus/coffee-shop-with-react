const {db}= require('../config/firebase');

const customerContact=async(req,res)=> {
    try 
    {
        const {name,email,phone,subject,message}=req.body;
        const contactBoard= db.collection('contact').doc();
        const element =
        { 
            idcontact:contactBoard.id,
            name,
            email,
            phone,
            subject,
            message
        }

        contactBoard.set(element);
        res.status(200).send({
            status:'success',
            message:'Contact added successfully',
            data:element
        })
    }catch(error)
    {
        res.status(500).json(error.message)
    }
}

module.exports.customerContact =customerContact 