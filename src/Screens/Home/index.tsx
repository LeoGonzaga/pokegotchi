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
  Level,
} from "./styles";
import Status from "../../Components/Status/Status";
import { PokeContext } from "../../context/usePoke";
import BackgroundSVG from "../../Components/BackgroundSVG/BackgroundSVG";

const Home: React.FC = () => {
  const { pokemon, primaryColor } = useContext(PokeContext);
  const [checkLife, setCheckLife] = useState<number>(0);
  const [countCheckLife, setCountCheckLife] = useState<number>(0);

  const [life, setLife] = useState<number>(50);

  let min = Math.ceil(1);
  let max = Math.floor(3);

  const handleInitialValue = useCallback(() => {
    let lifeTime = Math.floor(Math.random() * (max - min)) + min;
    setCheckLife(lifeTime);
  }, []);

  const handleStatesPokemon = useCallback(() => {
    let lifeTime = Math.floor(Math.random() * (max - min)) + min;
    setCountCheckLife(lifeTime);
  }, []);

  const handleLifeCycle = useCallback(() => {
    console.log(life, checkLife, countCheckLife);
    if (checkLife > 0 && countCheckLife > 0) {
      if (checkLife === countCheckLife) {
        setLife(life - 1);
      }
    }
  }, [countCheckLife, checkLife, life]);

  useEffect(() => {
    handleInitialValue();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleStatesPokemon();
    }, 2 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleLifeCycle();
  }, [countCheckLife]);

  return (
    <Container>
      <BgPoke color={primaryColor || "#fff"}>
        <BackgroundSVG color={primaryColor} />
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

      <Level color={primaryColor || "#fff"}>Lvl 1</Level>

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
