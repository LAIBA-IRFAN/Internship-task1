const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Patient = require('../model/patient')

router.post('/',(req,res,next)=>{
    const patient = new Patient({
        _id:new mongoose.Types.ObjectId,
        // mrnumber:req.body.mrnumber,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        // registerdate:req.body.registerdate
    }) 

    patient.save()
    .then(result =>{
    console.log(result);
    res.status(200).json({
        newPatient:result
    })
}
    )

    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    
    })

})

// router.post("/Login",(req,res)=>{
//     const {email,phone} =req.body;
//     Patient.findone({email:email},(err,data)=>{
//         if(data){
//            if(phone === data.phone){
//                res.send({message:"login sucess",patient:patient})
//                console.log("LOGIN SUCCESSFULLY !")
//            }else{
//                res.send({message:"wrong credentials"})
//            }
//         }else{
//             res.send("not register")
//         }
//     })
// });

module.exports = router;
