import React from 'react';
import { CInputGroup, CInputGroupText,CFormInput, CButton,CFormSelect } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';
import Click from './Click';



const Form = () => {

 <Click/>

    return(
    <>
    <br></br><br></br>
        <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "register">Register</div><br></br>

    <CFormSelect id="options" aria-label="Default select example" onChange={Click}>
  <option value="patient">Patient</option>
  <option value="doctor">Doctor</option>
</CFormSelect>
        {/* <select id="options" onChange={Click}>
            <option id="1" name="patient" value="patient">Patient</option>
            <option id="2" name="doctor" value="doctor">Doctor</option>
        </select> */}

        <br></br>

    
    <CInputGroup className="mb-3" id="mr_number">
  <CInputGroupText id="basic-addon1">+</CInputGroupText>
  <CFormInput placeholder="M.R. Number" aria-label="M.R. Number" aria-describedby="basic-addon1"/>
   </CInputGroup>

    <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">+</CInputGroupText>
  <CFormInput placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">@</CInputGroupText>
  <CFormInput placeholder="Register Date" aria-label="Register Date" aria-describedby="basic-addon1"/>
   </CInputGroup>

   <CButton className="main_button" color="success" type="submit">Create Account</CButton>
   </div>
   </div>
        </>

    );
   

}


export default Form; 