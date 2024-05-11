import React, { forwardRef } from 'react';
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

const Navigation = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
});

export default Navigation;