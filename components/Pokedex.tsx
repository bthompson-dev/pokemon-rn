import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const pokemonList = require("@/assets/pokemon.json");

interface PokemonData {
  id: number;
  name: string;
  url: string;
}

function Pokemon({ pokemon }: { pokemon: PokemonData }) {
  return <ThemedText style={styles.pokemon}>{pokemon.name}</ThemedText>;
}

export default function Pokedex() {
  return (
    <FlatList
      data={pokemonList}
      renderItem={({ item }) => <Pokemon pokemon={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Pokedex Welcome</ThemedText>
            <HelloWave />
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
  pokemon: {
    marginVertical: 4,
    marginHorizontal: 8,
    fontSize: 18,
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
