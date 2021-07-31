import styled from "styled-components/native";

type Colors = {
  color: string;
};

type Pokemon = {
  size?: Number;
};
export const Container = styled.View`
  flex: 1;
`;

export const Poke = styled.TouchableOpacity<Colors>`
  background-color: ${(props) => props.color};
  height: 33%;
  width: 100%;
  padding: 10px;
  border: none;
`;

export const Pokemon = styled.Image<Pokemon>`
  width: ${(props) => (props.size ? props.size + "%" : "100%")};
  height: ${(props) => (props.size ? props.size + "%" : "100%")};
  margin: 0px;
`;

export const SelectPokes = styled.View`
  background-color: red;
  flex:1;
  flex-direction: row;
`;
