import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

interface PokemonData {
  id: number;
  name: string;
  url: string;
}

export default function Pokemon({ pokemon }: { pokemon: PokemonData }) {
  return (
    <ThemedText style={styles.pokemon}>
      <Link
        href={{
          pathname: "/pokemon/[pokemonId]",
          params: { pokemonId: pokemon.id },
        }}
      >
        {pokemon.name}
      </Link>
    </ThemedText>
  );
}

const styles = StyleSheet.create({
  pokemon: {
    marginVertical: 4,
    marginHorizontal: 8,
    fontSize: 18,
  },
});
