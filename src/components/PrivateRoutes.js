import React from "react";
import { Route, Navigate, redirect, useNavigate } from 'react-router-dom';
import Friends from "./Friends";
import Add from "./Add";

const PrivateRoutes = ({ children }) => {
  
    const token = localStorage.getItem('token')
    
    if (token === null) {
        return  <Navigate to="/"/>
    }

    return children;
    
}

export default PrivateRoutes;
