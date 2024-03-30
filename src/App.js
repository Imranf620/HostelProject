import React from 'react'
import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/team/Team';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Services from './pages/Services/Services';
import Check from './pages/Check/Check';

import List from './pages/List/List';
// import SingleHostel from './pages/SingleHostel/SingleHostel';
import Hostel from './pages/Hostel/Hostel';
import Room from './pages/Room/Room';
import Dashboard from './pages/Dashboard/Dashboard';
import RentDB from './pages/RentDB/RentDB';
import RoomDashboard from './pages/RoomDashboard/RoomDashboard';





const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/list/:id" element={<Hostel/>}/>

        <Route path="/room" element={<Room/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/rent" element={<RentDB/>}/>
        <Route path="/roomdashBoard" element={<RoomDashboard/>}/>
        <Route path="/check" element={<Check/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App