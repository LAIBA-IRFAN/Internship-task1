import React from 'react';
import { CInputGroup, CInputGroupText,CFormInput, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './Form.css';
const Login = ()=>{
    return(

    <>
    <br></br><br></br>
    <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "login">Login</div><br></br>
    
    <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1">@</CInputGroupText>
    <CFormInput type='email' placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
     </CInputGroup>
  
     <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1">+</CInputGroupText>
    <CFormInput type='password' placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
     </CInputGroup>

     <CButton className="main_button" color="success" type="submit">Login</CButton>
     </div>
     </div>
     </>
     );
}
export default Login;