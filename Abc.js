const express = require('express');
const Abc = express();
const doctorroute = require('./api/routes/doctor')
const patientroute = require('./api/routes/patient')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// const cors = require('cors');

mongoose.connect('mongodb+srv://laiba_irfan:database(123)@laiba.bovlw.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('Connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('Connected with database');
});

// Abc.use(cors());

Abc.use(bodyParser.urlencoded({extended:false}));
Abc.use(bodyParser.json());

Abc.use('/doctor', doctorroute);
Abc.use('/patient', patientroute);

module.exports = Abc;
