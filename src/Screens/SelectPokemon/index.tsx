import React from "react";
import { colors } from "../../Themes/colors";
import { Pokemon } from "../Home/styles";

import { Container, Poke } from "./styles";

const SelectPokemon: React.FC = () => {
  return (
    <Container>
      <Poke color={colors.grass}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
          }}
        />
      </Poke>
      <Poke color={colors.fire}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
          }}
        />
      </Poke>{" "}
      <Poke color={colors.water}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
          }}
        />
      </Poke>
    </Container>
  );
};

export default SelectPokemon;
