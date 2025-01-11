import React, { useState } from "react";

// Importamos las imágenes que vamos a utilizar
import welcome1 from "../../assets/img/bienvenida-1.png";

export const Onboarding1 = React.forwardRef((props, ref) => (
    <div ref={ref} {...props} className="flex flex-col w-full mx-auto items-center">
        <img src={welcome1} className="my-[4rem]" alt="" />
        <h1 className="text-[2rem] text-center font-medium mb-6">Todos los Pokémon en un solo lugar</h1>
        <span className="text-lg text-gray-500 text-center">Accede a una amplia lista de Pokémon de todas las generaciones jamás creadas por Nintendo.</span>
    </div>
));