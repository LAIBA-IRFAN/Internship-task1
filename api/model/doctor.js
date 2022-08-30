const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    email:String,
    phone:Number,
    // registerdate:Date
})

module.exports = mongoose.model('Doctor',doctorSchema)
