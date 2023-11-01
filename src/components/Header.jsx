import React from "react";

export const Header = () => {
    return (
        <header className="header w-full p-2 relative">
            <form action="" className="relative">
                <input className="w-full rounded-xl border-2 border-stone-200 text-lg pt-2 pl-2 pb-2 pr-32 focus:border-blue-400 focus:outline-none hover:border-blue-400 focus-visible:border-blue-400" />
                <button className="bg-blue-400 text-white rounded-lg px-4 absolute inset-y-2 right-2 focus:outline-none hover:bg-blue-500 focus-visible:bg-blue-500"><i className="fa-light fa-magnifying-glass"></i> Buscar</button>
            </form>
        </header>
    )
}