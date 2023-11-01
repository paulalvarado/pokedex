import React, { useEffect } from "react";
import { usePokemonStore } from "../context/usePokemonStore";
import { Pokemon } from "../components/pokemon/Pokemon";

export const HomePage = () => {
  const pokemones = usePokemonStore((state) => state.pokemones);
  const offset = usePokemonStore((state) => state.offset);
  const setOffset = usePokemonStore((state) => state.setOffset);

  useEffect(() => {
    console.log("pokemones", pokemones);
  }, [pokemones]);
  return (
    <div className="pb-20">
      {pokemones.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}

      <button onClick={() => setOffset(offset + 10)} className="w-[200px] bg-blue-500 p-2 mt-4 text-white rounded mx-auto block">Agregar más</button>
    </div>
  );
};
