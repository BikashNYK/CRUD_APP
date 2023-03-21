import { useState } from 'react';
import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Edit';
function App() {
  const [user, setuser] = useState(0);

  return (
    <Router>
      <>
          <ToastContainer />
          <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
