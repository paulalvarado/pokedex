import { AppRouter } from './AppRouter'
import { useEffect } from 'react';
import axios from 'axios';
import { usePokemonStore } from './context/usePokemonStore';

function App() {
  const setPokemones = usePokemonStore((state) => state.setPokemones);
  const pokemones = usePokemonStore((state) => state.pokemones);
  const offset = usePokemonStore((state) => state.offset);
  
  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
      const pokemonList = response.data.results;

      // Mapeamos la lista de Pokémon para obtener datos adicionales
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          return detailedResponse.data;
        })
      );

      return detailedPokemonList;
    } catch (error) {
      console.error('Error fetching Pokémon data: ', error);
    }
  };

  useEffect(() => {
    const getPokemonData = async () => {
      const detailedPokemonList = await fetchPokemonData();
      setPokemones([...pokemones, ...detailedPokemonList]);
    };
    getPokemonData();
  }, [offset]);

  return (
    <AppRouter />
  )
}

export default App;
