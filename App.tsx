import { StatusBar } from "expo-status-bar";
import React from "react";
import { Container } from "./global";
import Home from "./src/Screens/Home";
import SelectPokemon from "./src/Screens/SelectPokemon";
import PokeContextProvider from "./src/context/usePoke";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Container>
      <StatusBar style="dark" />
      <PokeContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Selecione seu pokémon"
              component={SelectPokemon}
              options={{
                headerTitleAlign: "center",
                headerTintColor: "#ffff",
                headerStyle: {
                  backgroundColor: "#A52A2A",
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="Pokegotchi"
              component={Home}
              options={{
                headerTitleAlign: "center",
                headerTintColor: "#ffff",
                headerShown:false,
                headerStyle: {
                  backgroundColor: "#A52A2A",
                  elevation: 0,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PokeContextProvider>
    </Container>
  );
}
