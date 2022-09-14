const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    mrnumber:String,
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    phone:Number
})

module.exports = mongoose.model('Patient',patientSchema)
