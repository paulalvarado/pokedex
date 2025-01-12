import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    // Identificar si existe en localStorage la variable Onboarding
    useEffect(() => {
        if (localStorage.getItem("Onboarding")) {
            console.log("Ya se ha realizado el Onboarding");
        } else {
            localStorage.setItem("Onboarding", true);
            navigate('/welcome');
        }
    }, []);

    return (
        <><h1>Home</h1></>
    );
};