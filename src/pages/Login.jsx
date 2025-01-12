import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// Importamos el Onboarding
import { Onboarding } from "./onboarding/Onboarding";

// Importamos las imágenes que vamos a utilizar
import login1 from "../assets/img/login-1.png";

export const Login = () => {

    return (
        <div className="w-full ">
            <div className="flex flex-col mx-auto items-center bg-white h-dvh justify-end py-8 gap-4 w-[80%]">
                <img src={login1} className="" alt="" />
                <h1 className="text-[2rem] text-center font-medium">¿Estás listo para esta aventura?</h1>
                <span className="text-lg text-gray-500 text-center">¡Simplemente crea una cuenta y comienza a explorar el mundo de Pokémon hoy mismo!</span>

                <button className="rounded-full w-full bg-blue-800 text-white font-medium text-center text-xl py-4">Crear una cuenta</button>
                <button className="w-full bg-white text-blue-800 font-medium text-center text-xl py-4">Ya tengo una cuenta</button>
            </div>
        </div>
    );
};