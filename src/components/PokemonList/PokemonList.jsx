import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "./PokemonContext";

function PokemonList() {
  const { pokemons, handleLoadMore } = useContext(PokemonContext);

  // Verifica si hay datos en el almacenamiento local y úsalos como datos iniciales
  const localData = JSON.parse(localStorage.getItem("pokemons"));
  const [initialData, setInitialData] = useState(localData || []);

  useEffect(() => {
    if (initialData.length === 0) {
      handleLoadMore();
    }
  }, [handleLoadMore, initialData]);

  // Almacena los datos en el almacenamiento local cuando cambie pokemons
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <div className="PokemonList">
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default PokemonList;
