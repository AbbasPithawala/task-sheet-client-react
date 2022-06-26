import logo from './logo.svg';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Login  from "./components/pages/Login/Login"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
