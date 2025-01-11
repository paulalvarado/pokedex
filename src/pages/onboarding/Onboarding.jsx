import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Onboarding1 } from "./Onboarding1";
import { Onboarding2 } from "./Onboarding2";

export const Onboarding = () => {
    const [state, setState] = useState(0);

    const next = () => setState((prev) => (prev === 0 ? 1 : 0));

    return (
        <div className="flex flex-col w-[80%] mx-auto items-center h-dvh justify-end py-8 gap-8">
            <div className="relative w-full h-full">
                {/* Onboarding1 */}
                <Transition
                    show={state === 0}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute w-full h-full"
                >
                    <Onboarding1 />
                </Transition>

                {/* Onboarding2 */}
                <Transition
                    show={state === 1}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute w-full h-full"
                >
                    <Onboarding2 />
                </Transition>
            </div>

            <div className="w-full flex gap-2 justify-center items-center">
                <div className={`h-[10px] transition-all delay-100 rounded-full ${state === 0 ? "bg-blue-800 w-8" : "bg-gray-300 w-4"}`}></div>
                <div className={`h-[10px] transition-all delay-100 rounded-full ${state === 1 ? "bg-blue-800 w-8" : "bg-gray-300 w-4"}`}></div>
            </div>

            <button
                className="rounded-full bg-blue-800 text-white font-medium text-xl text-center px-6 py-2 w-full"
                onClick={next}
            >
                Continuar
            </button>
        </div>
    );
};
