const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Doctor = require('../model/doctor')

router.post('/',(req,res,next)=>{
    const doctor = new Doctor({
        _id:new mongoose.Types.ObjectId,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        // registerdate:req.body.registerdate
    }) 

    doctor.save()
    .then(result =>{
    console.log(result);
    res.status(200).json({
        newDoctor:result
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

module.exports = router;
