import React,{Component,useState}  from 'react';
import axios from 'axios';
import { CInputGroup,CForm, CInputGroupText,CFormInput, CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            phone:'',
          };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
     };

     onSubmit = e => {
        e.preventDefault();
        const data1= {
            email: this.state.email,
            phone: this.state.phone,
        }
        if(data1){
            console.log("Successfully logged in")
        }
    }
    
    render(){
    return(

    <>
    <br></br><br></br>
    <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "login">Login</div><br></br>
    
    <CForm noValidate onSubmit={this.onSubmit}>
    <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1">@</CInputGroupText>
    <CFormInput type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
     </CInputGroup>
  
     <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1">+</CInputGroupText>
    <CFormInput type='phone' name='phone' value={this.state.phone} onChange={this.onChange} placeholder="Phone Number" aria-label="Phone" aria-describedby="basic-addon1"/>
     </CInputGroup>

     <CButton className="main_button" color="success" type="submit">Login</CButton>
     </CForm>
     </div>
     </div>
     </>
     );
}
}
export default Login