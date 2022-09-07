import React, {useState,Component} from "react";
import {CForm, CInputGroup, CInputGroupText,CFormInput, CButton,CFormSelect } from '@coreui/react';
import  CIcon  from '@coreui/icons-react';
import { cilList,cilUser,cibMailRu,cilPhone,cilLockLocked} from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import Click from './Click';
import axios from 'axios';

class Registration extends Component{
  constructor() {
    super();
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:''
    };
  }


  onChange = e => {
     this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    };
    const data1 = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone
    };

    if(data.firstname && data.lastname && data.email && data.phone && data.password){
      axios.post('http://localhost:3000/doctor', data)
      .then(res => {
        this.setState({
          // mrnumber:'',
          firstname:'',
          lastname:'',
          email:'',
          phone:'',
          password:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error!")
      })

    }
    else{
      axios
      .post('http://localhost:3000/patient', data1)
      .then(res => {
        this.setState({
          firstname:'',
          lastname:'',
          email:'',
          phone:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error!")
      })

    }
};

    render(){
    return(
    <>
    <br></br><br></br>
        <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "register">Register</div><br></br>
        
      <CForm noValidate onSubmit={this.onSubmit}>

    <CFormSelect id="options" aria-label="Default select example" onChange={Click}>
  <option value="doctor">Doctor</option>
  <option value="patient">Patient</option>`
</CFormSelect>


        <br></br>

    <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilUser} size="lg"/></CInputGroupText>
  <CFormInput type='text' name='firstname' value={this.state.firstname} onChange={this.onChange} placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilUser} size="lg"/></CInputGroupText>
  <CFormInput type='text' name='lastname' value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cibMailRu} size="lg"/></CInputGroupText>
  <CFormInput type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilPhone} size="lg"/></CInputGroupText>
  <CFormInput type='tel' name='phone' value={this.state.phone} onChange={this.onChange} placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3" id="password">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilLockLocked} size="lg"/></CInputGroupText>
  <CFormInput type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CButton className="main_button" color="success" type="submit">Create Account</CButton>
   </CForm>
   </div>
   </div>
        </>

    );
}
}


export default Registration; 