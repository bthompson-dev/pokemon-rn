import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Pokemon from "./Pokemon";

import { pokeApiPokemon } from "./Pokedex";

export default function PokemonList({
  pokemonList,
}: {
  pokemonList: pokeApiPokemon[];
}) {
  return (
    <FlatList
      data={pokemonList}
      renderItem={({ item, index }) => {
        const capitalizedName = item.name[0].toUpperCase() + item.name.slice(1);
        const pokemonWithId = {
          name: capitalizedName,
          url: item.url,
          id: index + 1,
        };

        return <Pokemon pokemon={pokemonWithId} />;
      }}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={<ListHeaderComponent />}
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.pokemonContainer}
    />
  );
}

function ListHeaderComponent() {
  return (
    <View style={styles.headerContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pokedex</ThemedText>
      </ThemedView>
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
    </View>
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
