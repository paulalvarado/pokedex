import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {

  return (
    <PokemonContext.Provider>
      {children}
    </PokemonContext.Provider>
  );
};
