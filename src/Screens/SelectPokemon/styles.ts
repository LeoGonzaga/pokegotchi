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

export const Background = styled.View<Colors>`
  background-color: ${(props) => props.color};
  height: 50%;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom-right-radius: 200px;
  align-items: center;
`;

export const Poke = styled.TouchableOpacity``;

export const Pokemon = styled.Image<Pokemon>`
  max-width: 300px;
  max-height: 200px;
  width: ${(props) => (props.size ? props.size + "px" : "100%")};
  height: ${(props) => (props.size ? props.size + "px" : "100%")};
  margin: 0px;
  margin-top: 20px;
`;

export const SelectPokes = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Row = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Pokeball = styled.Image`
  width: 90px;
  height: 90px;
`;


export const SelectText = styled.Text``;