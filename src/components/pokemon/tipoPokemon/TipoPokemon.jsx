import React from "react";

export const TipoPokemon = ({ tipo, estilo }) => {
    let estilos = {
        bg: '',
        svg: ''
    };

    return (
        <div className={`tipo-pokemon rounded-3xl p-2 ${estilo[tipo].bg} flex items-center w-fit mr-1`}>
            <div dangerouslySetInnerHTML={{ __html: estilo[tipo].svg }}></div>
            <span className="tipo-pokemon__tipo capitalize text-white mx-1">{tipo}</span>
        </div>
    );
}
