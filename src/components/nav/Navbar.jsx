import React, { useState } from "react";
import './Navbar.css';
import { PokebolaBtn } from "./BotonesNavbar/PokebolaBtn";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [botones, setBotones] = useState([
        { id: 1, estado: true, url: '/' },
        { id: 2, estado: false, url: '/search' },
        { id: 3, estado: false, url: '/search' },
        { id: 4, estado: false, url: '/search' }
    ]);

    const handleButtonClick = (id) => {
        const updatedBotones = botones.map((boton) => {
            if (boton.id == id) {
                if(boton.estado == false){
                    return { ...boton, estado: !boton.estado };
                } else {
                    return { ...boton, estado: boton.estado };
                }
            } else {
                return { ...boton, estado: false };
            }
        });
        setBotones(updatedBotones);
    };

    return (
        <nav className="navbar w-full p-2 fixed b-0">
            <ul className="navbar-links-list">
                {botones.map((boton) => (
                    <li key={boton.id}>
                        <Link to={boton.url}>
                            <PokebolaBtn estado={boton.estado} size='w-[40px]' onClick={() => handleButtonClick(boton.id)} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
