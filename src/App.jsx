import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import Login from './Component/Login';
import AddNewDoctor from './Component/AddNewDoctor';
import AddNewAdmin from './Component/AddNewAdmin';
import {ToastContainer} from "react-toastify"
import "ract-toastify/dist/RactToastify.css";
import axios from 'axios';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect (() =>{
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/videoProduct",
          {withCredentials: true}
        );
        setIsAuthenticated(true);
        setUser(response.data.User);
      }
      catch(error){
      setIsAuthenticated(false);
      setUser({});
      }
    };
    fetchUser();
  },[isAuthenticated]);
  return(
    <>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctor/addnew" element={<AddNewDoctor/>}/>
        <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
      </Routes>
      <ToastContainer position="top-center"/>
      </BrowserRouter>
      </>
  )
}
export default App