import React, { useState, useEffect, forwardRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";
import Navigation from "../components/templates/Navigation";

export const AppRouter = () => {
    
    return (
        <Routes>
            {/* <Route path="/" element={<Navigation />} > */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
            {/* </Route> */}
        </Routes>
    );
};