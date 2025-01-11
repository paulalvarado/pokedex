import React, { useState } from "react";

// Importamos las imágenes que vamos a utilizar
import welcome2 from "../../assets/img/bienvenida-2.png";

export const Onboarding2 = React.forwardRef((props, ref) => (
    <div ref={ref} {...props} className="flex flex-col w-full mx-auto items-center">
        <img src={welcome2} className="my-[4rem]" alt="" />
        <h1 className="text-[2rem] text-center font-medium mb-6">Mantén tu<br />Pokédex actualizada</h1>
        <span className="text-lg text-gray-500 text-center">Regístrate y mantén tu perfil, Pokémon favoritos, configuraciones y más guardados en la aplicación, incluso sin conexión a Internet.</span>
    </div>
));