import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route,Routes,useState,BrowserRouter} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Error from './Error';
import Landing from './Landing';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/registration' element={<Registration/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/error' element={<Error/>} />
    </Routes>
    </>

  
  );
}

export default App;
