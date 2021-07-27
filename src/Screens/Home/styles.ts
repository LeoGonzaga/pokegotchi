import styled from "styled-components/native";
import { colors } from "../../Themes/colors";
export const Container = styled.View`
  width: 100vw;
  background: ${colors.backgroud};
  justify-content: center;
  align-items: center;
`;

type Colors = {
  color: string;
};

export const BgPoke = styled.ImageBackground<Colors>`
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin: 0px;
  margin-top: 20px;
`;
export const WrapperButtons = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Pokemon = styled.Image`
  max-width: 300px;
  max-height: 320px;
  width: 100%;
  height: 90%;
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
