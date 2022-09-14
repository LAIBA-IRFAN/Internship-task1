import React,{useState,} from 'react';
import { Navigate} from 'react-router-dom';
import {CFormInput,CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Form.css';

const AfterLogin =()=>{
    const [state, setState] = useState(false);
    const signup=()=>{
        setState(true)
}
      if(state){
        return (
          <Navigate to='/Registration'/>
        );
      }
    return(
        <>
        <br></br><br></br><br></br><br></br><br></br><br></br>
         <div className="container">
        <div className= "main_container col-xl-6 col-lg-6 col-md-6 col-sm-6 p-4">
        <div className= "welcome">Welcome</div><br></br>


            <CFormInput className='input_box' type="text" placeholder="Enter MR number" aria-label="default input example"/>
            <br></br>
            <CButton onClick={signup} className="main_button" color="success" type="submit">Sign up or Register</CButton>
            </div>
            </div>

        </>

    )
}

export default AfterLogin;