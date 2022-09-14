import React,{useState}  from 'react';
import {Navigate} from 'react-router-dom';
import { CInputGroup,CForm, CInputGroupText,CFormInput, CButton } from '@coreui/react';
import  CIcon  from '@coreui/icons-react';
import {cibMailRu,cilLockLocked} from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Login =()=>{

  const [info,setInfo] = useState({
    email:'',
    password:''
  })
  const [confirm, setConfirm] = useState(false);
  const [state, setState] = useState(false);

    const change= e => {
      setInfo((prevValue)=>{
        return{
          ...prevValue,
          [e.target.name]:e.target.value
        }})
      };

       const submit = e => {
        e.preventDefault();

        if(e.target.email.value && e.target.email.value){
          setConfirm(true);
        }
      
    
        // const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        // if(data2.email===""){
        //   alert("Email is required")
        // }
        // else if(!data2.email.match(emailCond)){
        //   alert("Please enter a valid email address")
        // }


        // else if(data2.password===""){
        //   alert("Password is required")
        // }

      }
      const signup=()=>{
        setState(true)
     
      }
      if(state){
        return (
          <Navigate to='/Registration'/>
        );

      }
      if (confirm) {
        return (
          <Navigate to='/AfterLogin'/>
        );
      }
      




    return(

    <>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "login">Login</div><br></br>
    
    <CForm noValidate onSubmit={submit}>
    <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1"><CIcon icon={cibMailRu} size="lg"/></CInputGroupText>
    <CFormInput type='email' name='email' value={info.email}  onChange={change} placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1"/>
     </CInputGroup>
  
     <CInputGroup className="mb-3">
    <CInputGroupText id="basic-addon1"><CIcon icon={cilLockLocked} size="lg"/></CInputGroupText>
    <CFormInput type='password' name='password' value={info.password}   onChange={change} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
     </CInputGroup>

     <CButton className="main_button" color="success" type="submit">Login</CButton><br></br><br></br>
     <CButton onClick={signup} className="main_button" color="secondary">Sign up or Register</CButton>
     </CForm>
     </div>
     </div>
     </>
     );
// }
}
export default Login