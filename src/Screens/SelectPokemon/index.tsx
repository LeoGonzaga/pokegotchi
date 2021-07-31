import React, { useContext } from "react";
import { useCallback } from "react";
import { PokeContext } from "../../context/usePoke";
import { colors } from "../../Themes/colors";

import PokeballImage from "../../../assets/pokeball.png";
import {
  Container,
  Poke,
  Pokemon,
  Row,
  SelectPokes,
  Pokeball,
  Background,
} from "./styles";

const SelectPokemon: React.FC<any> = () => {
  const { handleSelectInitialPokemon, handleSelectTheme, pokemon } =
    useContext(PokeContext);

  const handleSelected = useCallback((poke: string) => {
    handleSelectInitialPokemon(poke);
    handleSelectTheme(poke);
  }, []);

  return (
    <Container>
      <Background color={colors.fire}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: `https://projectpokemon.org/images/normal-sprite/${pokemon}.gif`,
          }}
        />
      </Background>
      <SelectPokes>
        <Poke onPress={() => handleSelected("charmander")}>
          <Pokemon
            size={90}
            resizeMode="contain"
            source={{
              uri: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
            }}
          />
        </Poke>

        <Poke onPress={() => handleSelected("squirtle")}>
          <Pokemon
            size={90}
            resizeMode="contain"
            source={{
              uri: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
            }}
          />
        </Poke>

        <Poke onPress={() => handleSelected("bulbasaur")}>
          <Pokemon
            size={90}
            resizeMode="contain"
            source={{
              uri: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
            }}
          />
        </Poke>
      </SelectPokes>

      <Row>
        <Pokeball source={PokeballImage} resizeMode="contain" />
      </Row>
    </Container>
  );
};

export default SelectPokemon;
