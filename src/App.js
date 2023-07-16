import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Signin'
import Signup from './Components/Signup'
import Home from './Components/Dashobard/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if authentication token or session information exists
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App