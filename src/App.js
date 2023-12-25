//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React  from 'react';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'darkslateblue';   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <BrowserRouter>
    <>    
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/> {/*passing props*/}
    <div className="container my-3">    
    {/* <TextForm heading="Enter the text below" mode = {mode}/>     */}
    {/* <About mode = {mode}/>  */}
    <Routes>         

          <Route path="/" element={<TextForm heading="Enter the text below" mode = {mode}/>}/>

          <Route path="about" element={<About />} />
          
    </Routes>         
    </div>    
    </>
    </BrowserRouter>
    
  );
}

export default App;
