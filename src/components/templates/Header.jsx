import React, { useState, useEffect } from "react";
import LoaderPage from "../../pages/LoaderPage";
import { Transition } from '@headlessui/react';

export const Header = () => {

    // state para cargar el loader
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            {
                <Transition
                    show={loading}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <LoaderPage />
                </Transition>
            }
            <h1>Header</h1>
        </>
    )
}