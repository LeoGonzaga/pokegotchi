import styled from "styled-components/native";
import { colors } from "../../Themes/colors";

type Colors = {
  color: string;
};
export const Container = styled.View`
  width: 100vw;
  background: ${colors.backgroud};
  justify-content: center;
  align-items: center;
`;

export const BgPoke = styled.View<Colors>`
  width: 280px;
  height: 280px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-top: 20px;
  background-size: contain;
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
  height: 60%;
  max-height: 200px;
  margin: 0px;
  position: fixed;
  z-index: 20;
`;

export const PokeName = styled.Text<Colors>`
  color: ${(props) => props.color};
  font-size: 36px;
  margin: 0px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const ButtonName = styled.Text`
  color: ${colors.text};
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Level = styled.Text<Colors>`
  color: ${(props) => props.color};
  font-size: 26px;
  margin: 0px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: end;
`;
