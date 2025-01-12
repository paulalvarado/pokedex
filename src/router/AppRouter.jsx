import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Login } from "../pages";
import { Onboarding } from "../pages/onboarding/Onboarding";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
};

const HomeContent = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <Home />
        </motion.div>
    );
};

const LoginContent = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <Login />
        </motion.div>
    );
};

export const AppRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<HomeContent />} />
                <Route path="login" element={<LoginContent />} />
                <Route path="welcome" element={<Onboarding />} />
            </Routes>
        </AnimatePresence>
    );
};
