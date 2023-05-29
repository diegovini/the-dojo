import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Routes>
        {/* //<Route path="/" element={user ? <Home />:<Navigate to={"/login"}/>}> */}
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/project/:id" element={<Project/>}/>
        <Route path="/login" element={<Login/>}/>        
        <Route path="/signup" element={<Signup/>}/>        
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App
