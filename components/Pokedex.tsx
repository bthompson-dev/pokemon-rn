import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";

import { View } from "react-native";
import { useEffect, useState } from "react";

export interface pokeApiPokemon {
  name: string;
  url: string;
}

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<pokeApiPokemon[]>([]);
  const [searchQuery, onChangeSearchQuery] = useState<string>("");

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonList = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1302"
      ).then((res) => res.json());

      setPokemonList(response.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <View>
      
      <SearchBar searchQuery={searchQuery} onChangeSearchQuery={onChangeSearchQuery}/>
      <PokemonList pokemonList={pokemonList} />
      
    </View>
  );
}