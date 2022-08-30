import React, {   Component } from "react";
import {CForm, CInputGroup, CInputGroupText,CFormInput, CButton,CFormSelect } from '@coreui/react';
import  CIcon  from '@coreui/icons-react';
import { cilList,cilUser,cibMailRu,cilPhone} from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import Click from './Click';
import axios from 'axios';
import Landing from './Landing';
// import { render } from './Abc';

class Registration extends Component{
  constructor() {
    super();
    this.state = {
      mrnumber:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      // registerdate:''
    };
  }


  onChange = e => {
     this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const data = {
      mrnumber: this.state.mrnumber,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      // registerdate: this.state.registerdate
    };

    axios
    .post('http://localhost:3000/patient', data)
    .then(res => {
      this.setState({
        mrnumber:'',
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        // registerdate:''
      })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log("Error!")
    })
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
  <option value="patient">Patient</option>
  <option value="doctor">Doctor</option>`
</CFormSelect>


        <br></br>

    
    <CInputGroup className="mb-3" id="mr_number">
  <CInputGroupText id="basic-addon1"><CIcon icon={cilList} size="lg"/></CInputGroupText>
  <CFormInput name='mrnumber' value={this.state.mrnumber} onChange={this.onChange} placeholder="M.R. Number" aria-label="M.R. Number" aria-describedby="basic-addon1"/>
   </CInputGroup>

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

   {/* <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput type='date' name='registerdate' value={this.state.registerdate} onChange={this.onChange} placeholder="Register Date" aria-label="Register Date" aria-describedby="basic-addon1"/>
   </CInputGroup> */}

   <CButton className="main_button" color="success" type="submit">Create Account</CButton>
   </CForm>
   </div>
   </div>
        </>

    );
}
}


export default Registration; 