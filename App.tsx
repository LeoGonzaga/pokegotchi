import { StatusBar } from "expo-status-bar";
import React from "react";
import { Container } from "./global";
import Home from "./src/Screens/Home";

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}
