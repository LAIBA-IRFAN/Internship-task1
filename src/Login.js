import React,{Component,useState}  from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom';
import axios from 'axios';
import { CInputGroup,CForm, CInputGroupText,CFormInput, CButton } from '@coreui/react';
import  CIcon  from '@coreui/icons-react';
import {cibMailRu,cilPhone} from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './Landing';
import Registration from './Registration';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email:'',
            phone:'',
          };
    }

    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Navigate to='/Registration'/>
        }
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
            alert("Successfully logged in")

        }
    }
    
    render(){
    return(

    <>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "login">Login</div><br></br>
    
    <CForm noValidate onSubmit={this.onSubmit}>
    <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1"><CIcon icon={cibMailRu} size="lg"/></CInputGroupText>
    <CFormInput type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
     </CInputGroup>
  
     <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1"><CIcon icon={cilPhone} size="lg"/></CInputGroupText>
    <CFormInput type='phone' name='phone' value={this.state.phone} onChange={this.onChange} placeholder="Phone Number" aria-label="Phone" aria-describedby="basic-addon1"/>
     </CInputGroup>

     <CButton className="main_button" color="success" type="submit">Login</CButton><br></br><br></br>
     {this.renderRedirect()}
     <CButton className="main_button" color="secondary" onClick={this.setRedirect}>Sign up or Register</CButton>
     </CForm>
     </div>
     </div>
     </>
     );
}
}
export default Login