import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import HomePage from './components/pages/HomePage';
import HomePage2 from './components/pages/HomePage2';
import Refreshed from './components/Refreshed';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/portfolio/' exact element={<Home />} />
        <Route path='/HomePage' exact element={<Home />} />
        <Route path='/HomePage2' exact element={<Home />} />
        <Route path="/function_generator_project" element={<Refreshed url="https://abdullah-ali-syed.github.io/function_generator_project/" />} />
        <Route path='/pid_controller' element={<Refreshed url="https://abdullah-ali-syed.github.io/pid_controller/" />} />
        <Route path='/maze_guider' element={<Refreshed url="https://abdullah-ali-syed.github.io/maze_guider/" />} />
        <Route path='/react_app' element={<Refreshed url="https://abdullah-ali-syed.github.io/react_app/" />} />
        <Route path='/sign-up' element={<Home />} />
        <Route path='/portfolio' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
