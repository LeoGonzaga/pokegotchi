import React, { useContext } from "react";
import { useCallback } from "react";
import { PokeContext } from "../../context/usePoke";
import { colors } from "../../Themes/colors";

import { Container, Poke, Pokemon, SelectPokes } from "./styles";

const SelectPokemon: React.FC<any> = ({ navigation }) => {
  const { handleSelectInitialPokemon, handleSelectTheme } =
    useContext(PokeContext);

  const handleSelected = useCallback((poke: string) => {
    handleSelectInitialPokemon(poke);
    handleSelectTheme(poke);
    navigation.navigate("Pokegotchi");
  }, []);

  return (
    <Container>
      <Poke color={colors.grass} onPress={() => handleSelected("bulbasaur")}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
          }}
        />
      </Poke>
      <SelectPokes>
        <Pokemon
          size={20}
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/charmander.gif",
          }}
        />
             <Pokemon
          size={20}
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/squirtle.gif",
          }}
        />
          <Pokemon
          size={20}
          resizeMode="contain"
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/bulbasaur.gif",
          }}
        />
      </SelectPokes>
    </Container>
  );
};

export default SelectPokemon;
