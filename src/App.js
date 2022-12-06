import React, { Component} from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';

// import{
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
      document.title='CaseChanger - Dark Mode'
      setTimeout(()=>{
        document.title='CaseChanger'
      },1500);

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title='CaseChanger - Light Mode'
      setTimeout(()=>{
        document.title='CaseChanger'
      },1500);

    }
  }
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
 
    <Navbar title="CaseChanger" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">

    <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>
          {/* <Route exact path="/about" element={<About/>}/> */}

    </div>
   
    </>
  
  );
}

export default App;
