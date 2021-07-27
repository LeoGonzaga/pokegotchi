import styled from "styled-components/native";
import { colors } from "../../Themes/colors";
export const Container = styled.View`
  width: 100vw;
  background: ${colors.backgroud};
  justify-content: center;
  align-items: center;
`;

export const BgPoke = styled.ImageBackground`
  width: 300px;
  height: 320px;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;
export const WrapperButtons = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Pokemon = styled.Image`
  width: 100%;
  height: 100%;
  margin: 0px;
`;

export const PokeName = styled.Text`
  color: ${colors.pokename};
  font-size: 36px;
  margin: 0px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ButtonName = styled.Text`
  color: ${colors.text};
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;
