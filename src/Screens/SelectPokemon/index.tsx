import React, { useContext, useState } from "react";
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
  SelectText,
} from "./styles";

const SelectPokemon: React.FC<any> = ({ navigation }) => {
  const { handleSelectInitialPokemon, handleSelectTheme } =
    useContext(PokeContext);

  const [initialPoke, setInitialPoke] = useState<string>("charmander");
  const [color, setColor] = useState<string>(colors.fire);

  const handleSelected = useCallback(
    (poke: string) => {
      handleSelectInitialPokemon(poke);
      handleSelectTheme(poke);
      setInitialPoke(poke);
      handleChangeColor(poke);
    },
    [initialPoke, color]
  );

  const handleChangeColor = useCallback(
    (poke: string) => {
      switch (poke) {
        case "charmander":
          setColor(colors.fire);
          break;
        case "squirtle":
          setColor(colors.water);
          break;
        case "bulbasaur":
          setColor(colors.grass);
          break;

        default:
          setColor(colors.fire);
          break;
      }
    },
    [initialPoke, color]
  );

  const handleConfirm = useCallback(() => {
    navigation.navigate("Pokegotchi");
  }, []);

  return (
    <Container>
      <Background color={color}>
        <Pokemon
          resizeMode="contain"
          source={{
            uri: `https://projectpokemon.org/images/normal-sprite/${initialPoke}.gif`,
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

      <Row onPress={handleConfirm}>
        <Pokeball source={PokeballImage} resizeMode="contain" />
        <SelectText>I choose you</SelectText>
      </Row>
    </Container>
  );
};

export default SelectPokemon;
