import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
      <Stack.Screen
        name="pokemon/[pokemonId]"
        options={({ route }) => ({
          headerShown: true,
          title: `Pokemon #${
            (route.params as { pokemonId?: number })?.pokemonId ||
            "Pokemon Details"
          }`,
        })}
      />
    </Stack>
  );
}
