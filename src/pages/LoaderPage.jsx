import React, { forwardRef } from 'react';
import LogoPokedex from "../assets/img/pokedex_logo.png";
import { Loader } from "../components/loader/Loader";

const LoaderPage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="absolute bg-blue-950 top-0 left-0 w-screen h-screen z-100 flex justify-center items-center z-[1000]">
            <Loader className="mr-4"/>
            <img src={LogoPokedex} alt="Pokedex Logo" className="w-[200px] h-fit"/>
        </div>
    )
});

export default LoaderPage;