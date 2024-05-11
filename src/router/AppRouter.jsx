import React, { useState, useEffect, forwardRef } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import Navigation from "../components/templates/Navigation";

export const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};