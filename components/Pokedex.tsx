import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Pokemon from "./Pokemon";

import { useEffect, useState } from "react";

interface pokeApiPokemon {
  name: string;
  url: string;
}

export default function Pokedex() {
  let [pokemonList, setPokemonList] = useState<pokeApiPokemon[]>([]);

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
    <FlatList
      data={pokemonList}
      renderItem={({ item, index }) => {
        const pokemonWithId = { ...item, id: index };

        return <Pokemon pokemon={pokemonWithId} />;
      }}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Pokedex</ThemedText>
          </ThemedView>
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        </View>
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.pokemonContainer}
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "white",
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    marginTop: 100,
    zIndex: 2,
  },
  pokemonContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "lightblue",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  header: {
    height: 200,
    overflow: "hidden",
    backgroundColor: "white",
  },
});
