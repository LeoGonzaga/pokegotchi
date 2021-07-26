import React from "react";

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
import image from "../../../assets/Blob.svg";



const Home: React.FC = () => {
  return (
    <Container>
      <BgPoke source={image} resizeMode="contain">
        <Pokemon
          source={{
            uri: "https://projectpokemon.org/images/normal-sprite/charizard.gif",
          }}
        />
      </BgPoke>
      <PokeName>Charminé</PokeName>
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
      <Status text="Status" />
    </Container>
  );
};

export default Home;
