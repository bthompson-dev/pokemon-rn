import { Image } from 'expo-image';
import { FlatList, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface PokemonData {
  id: number;
  name: string;
  url: string; 
}

function Pokemon( {pokemon} : {pokemon: PokemonData}) {
  return (
    <ThemedText style={styles.pokemon}>{pokemon.name}</ThemedText>
  )
}

export default function Pokedex() {

  const pokemonList = require("@/assets/pokemon.json");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pokedex Welcome</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.pokemonContainer}>
        <FlatList data={pokemonList} renderItem={({item}) => <Pokemon pokemon={item} />} keyExtractor={item => item.id}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pokemonContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: 'lightblue',
  },
  pokemon: {
    marginVertical: 4,
    marginHorizontal: 8,
    fontSize: 18
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
