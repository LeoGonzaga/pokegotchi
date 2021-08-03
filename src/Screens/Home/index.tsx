import React, { useContext, useCallback, useState, useEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
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
  const [mood, setMood] = useState<string>(":)");
  const [checkLife, setCheckLife] = useState<number>(0);
  const [checkGame, setCheckGame] = useState<number>(0);
  const [checkFood, setCheckFood] = useState<number>(0);

  const [countCheckLife, setCountCheckLife] = useState<number>(0);
  const [countCheckGame, setCountCheckGame] = useState<number>(0);
  const [countCheckFood, setCountCheckFood] = useState<number>(0);

  const [life, setLife] = useState<number>(30);
  const [game, setGame] = useState<number>(30);
  const [food, setFood] = useState<number>(30);

  let min = Math.ceil(1);
  let max = Math.floor(100);

  const handleInitialValue = useCallback(() => {
    let lifeTime = Math.floor(Math.random() * (max - min)) + min;
    let gameTime = Math.floor(Math.random() * (max - min)) + min;
    let foodTime = Math.floor(Math.random() * (max - min)) + min;
    setCheckLife(lifeTime);
    setCheckGame(gameTime);
    setCheckFood(foodTime);
  }, []);

  const handleStatesPokemon = useCallback(() => {
    let lifeTime = Math.floor(Math.random() * (max - min)) + min;
    let gameTime = Math.floor(Math.random() * (max - min)) + min;
    let foodTime = Math.floor(Math.random() * (max - min)) + min;
    setCountCheckLife(lifeTime);
    setCountCheckGame(gameTime);
    setCountCheckFood(foodTime);
  }, []);

  const handleLifeCycle = useCallback(() => {
    if (checkLife > 0 && countCheckLife > 0) {
      if (checkLife === countCheckLife) {
        if (life > 1) {
          setLife(life - 1);
        } else {
          setLife(1);
        }
      }
    }
  }, [countCheckLife, checkLife, life]);

  const handleGameLifeCycle = useCallback(() => {
    if (checkGame > 0 && countCheckGame > 0) {
      if (checkGame === countCheckGame) {
        if (game > 1) {
          setGame(game - 1);
        } else {
          setGame(1);
        }
      }
    }
  }, [countCheckGame, checkGame, game]);

  const handleFoodLifeCycle = useCallback(() => {
    if (checkFood > 0 && countCheckFood > 0) {
      if (checkFood === countCheckFood) {
        if (food > 1) {
          setFood(game - 1);
        } else {
          setFood(1);
        }
      }
    }
  }, [countCheckFood, checkFood, food]);

  const handleSetMood = useCallback(() => {
    let halfLife = countCheckLife / 2;
    if (game === 2) {
      setMood("Brincar");
    } else if (life == halfLife) {
      setMood("Doente");
    } else if (food == 2) {
      setMood("Fome");
    }
  }, [game, life]);

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
    console.log(
      "Vida",
      countCheckLife,
      "Game",
      countCheckGame,
      "Food",
      countCheckFood
    );
    handleLifeCycle();
    handleGameLifeCycle();
    handleFoodLifeCycle();
  }, [countCheckLife]);

  useEffect(() => {
    handleSetMood();
  }, [game, life]);

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

      <Level color={primaryColor || "#fff"}>Vida: {life}</Level>

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
          <AntDesign name="medicinebox" size={24} color="#fff" />
          <ButtonName>Médico</ButtonName>
        </PrimiryButton>
      </WrapperButtons>
      <Status text={mood} color={primaryColor || "#fff"} />
    </Container>
  );
};

export default Home;
