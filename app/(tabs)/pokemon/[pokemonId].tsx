import { ThemedText } from "@/components/themed-text";
import { useLocalSearchParams } from "expo-router";

export default function PokemonDetails() {
  const { pokemonId } = useLocalSearchParams();

  return <ThemedText>Pokemon Details - ID: {pokemonId}</ThemedText>;
}
