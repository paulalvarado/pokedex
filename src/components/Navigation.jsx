import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Navbar } from "./nav/Navbar";

export const Navigation = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        <Navbar />
        </>
    )
}