import React, { useState } from "react";

// Importamos el Onboarding
import { Onboarding } from "./onboarding/Onboarding";

export const Login = () => {
    return (
        <div className="flex flex-col w-full mx-auto items-center">
            <Onboarding />
        </div>
    );
};