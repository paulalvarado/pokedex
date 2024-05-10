import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Navigation = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}