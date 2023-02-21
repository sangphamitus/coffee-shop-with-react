const {db}= require('../config/firebase');

const customerBooking=async(req,res)=> {
    try 
    {
        const {name,address,date,person,message}=req.body;
        const bookBoard= db.collection('booking').doc();
        const element =
        { 
            idbooking:bookBoard.id,
            name,
            address,
            date,
            person,
            message
        }

        bookBoard.set(element);
        res.status(200).send({
            status:'success',
            message:'booking added successfully',
            data:element
        })
    }catch(error)
    {
        res.status(500).json(error.message)
    }
}

module.exports.customerBooking=customerBooking