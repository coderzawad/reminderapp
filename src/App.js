import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Profile from './components/profile';
import Signin from './components/login';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  

  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/homepage" element={<Home/>} />
          
        </Routes>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
