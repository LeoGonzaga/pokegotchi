import React, { useContext, useCallback, useState, useEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PrimiryButton from "../../Components/PrimiryButton/PrimiryButton";
import {
  Container,
  WrapperButtons,
  BgPoke,
  Pokemon,
  PokeName,
  ButtonName,
} from "./styles";
import Status from "../../Components/Status/Status";
import { PokeContext } from "../../context/usePoke";

const Home: React.FC = () => {
  const { pokemon, primaryColor } = useContext(PokeContext);
  const [emotion, setEmotion] = useState<string>("");
  let food = 10;
  let shower = 10;
  let games = 10;
  let sleep = 10;

  const handleStatesPokemon = useCallback(() => {
    let min = Math.ceil(10);
    let max = Math.floor(50);
    let lifeTime = Math.floor(Math.random() * (max - min)) + min;
    console.log(lifeTime);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleStatesPokemon();
    }, 2 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <BgPoke
        source={{ uri: "null" }}
        resizeMode="contain"
        color={primaryColor || "#fff"}
      >
        <Pokemon
          resizeMode="contain"
          source={{
            uri:
              "https://projectpokemon.org/images/normal-sprite/" +
              `${pokemon}.gif`,
          }}
        />
      </BgPoke>
      <PokeName color={primaryColor || "#fff"}>{pokemon}</PokeName>
      <WrapperButtons>
        <PrimiryButton>
          <Entypo name="game-controller" size={24} color="#fff" />
          <ButtonName>Jogar</ButtonName>
        </PrimiryButton>
        <PrimiryButton>
          <Ionicons name="fast-food-outline" size={24} color="#fff" />
          <ButtonName>Comer</ButtonName>
        </PrimiryButton>
        <PrimiryButton>
          <MaterialCommunityIcons name="sleep" size={24} color="#fff" />
          <ButtonName>Dormir</ButtonName>
        </PrimiryButton>
        <PrimiryButton>
          <MaterialCommunityIcons name="shower" size={24} color="#fff" />
          <ButtonName>Banho</ButtonName>
        </PrimiryButton>
      </WrapperButtons>
      <Status text="Status" color={primaryColor || "#fff"} />
    </Container>
  );
};

export default Home;
