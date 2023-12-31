import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Signin';
import Signup from './Components/Signup';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main/*" element={<MainRoutes />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;




