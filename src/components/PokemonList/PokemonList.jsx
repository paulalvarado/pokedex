import React, { useEffect, useState, useContext } from "react";

function PokemonList() {

  return (
    <div className="PokemonList">
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
