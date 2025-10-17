import { StyleSheet, TextInput } from "react-native";

interface SearchBarProps {
  searchQuery: string;
  onChangeSearchQuery: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  onChangeSearchQuery,
}: SearchBarProps) {
  return (
    <TextInput
      onChangeText={onChangeSearchQuery}
      value={searchQuery}
      placeholder="Find a pokemon"
      style={styles.searchBar}
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    position: "absolute",
    top: 60,
    right: 10,
    minWidth: 150,
    backgroundColor: "lightgray",
    color: "black",
    fontSize: 18,
    padding: 10,
    borderRadius: 50,
    zIndex: 2,
  },
});
