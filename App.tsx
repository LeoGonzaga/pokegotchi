import { StatusBar } from "expo-status-bar";
import React from "react";
import { Container } from "./global";
import Home from "./src/Screens/Home";
import SelectPokemon from "./src/Screens/SelectPokemon";

export default function App() {
  return (
    <Container>
      <StatusBar style="dark" />
      <SelectPokemon/>
      {/* <Home /> */}
    </Container>
  );
}
