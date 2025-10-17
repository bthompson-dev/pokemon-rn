import { ThemedText } from "@/components/themed-text";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function PokemonDetails() {
  const { pokemonId, name, url } = useLocalSearchParams();

  const nameColor = generateRandomColor();

  return (
    <View style={styles.page}>
      <ThemedText style={styles.title}>Pokemon #{pokemonId}:</ThemedText>
      <ThemedText style={[styles.name, { color: nameColor }]}>
        {name}
      </ThemedText>
    </View>
  );
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({
  page: {
    margin: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  name: {
    fontSize: 24,
    marginTop: 10,
  },
});
