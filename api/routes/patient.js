const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Patient = require('../model/patient')

router.post('/',async(req,res)=>{

Patient.findOne({mrnumber:req.body.mrnumber}, function(err,find){
        if(err){
            console.log(err)
        }
        else if(find){
            res.status(409).send('Duplicate Resource')
        }
        else{
            Patient.count({},function(err,count){
                const _id = "MR" + String(count+1).padStart(5,'0');
                const body = {...req.body,mrnumber:_id}
                console.log(body);
                const data = new Patient(body);
                data.save().then(async(response)=>{
                    res.status(200).send("Mr number added successfully")
                })
                .catch((err)=>{
                    console.log(err)
                    if (err._message == "Product validation failed") {
                        res.status(400).send('Product validation failed');
                    }
                    else if (err.message.includes("duplicate key error collection")) {
                        res.status(409).send('Duplicate Resource');
                    }
                    else {
                        res.status(409).send(err);
                    }
                })
            })

        }
    })

    // const patient = new Patient({
    //     _id:new mongoose.Types.ObjectId,
    //     patientId:"1",
    //     firstname:req.body.firstname,
    //     lastname:req.body.lastname,
    //     email:req.body.email,
    //     phone:req.body.phone,
    // }) 

//     patient.save()
//     .then(result =>{
//     console.log(result);
//     res.status(200).json({
//         newPatient:result
//     })
// }
//     )

//     .catch(err =>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
    
//     })


})




// router.post('/',(req,res,next)=>{
//     const patient = new Patient({
//         _id:new mongoose.Types.ObjectId,
//         patientId:"1",
//         firstname:req.body.firstname,
//         lastname:req.body.lastname,
//         email:req.body.email,
//         phone:req.body.phone,
//     }) 

//     patient.save()
//     .then(result =>{
//     console.log(result);
//     res.status(200).json({
//         newPatient:result
//     })
// }
//     )

//     .catch(err =>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
    
//     })

// })

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
