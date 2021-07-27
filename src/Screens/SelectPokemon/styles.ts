import styled from "styled-components/native";

type Colors = {
  color: string;
};
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Poke = styled.TouchableOpacity<Colors>`
  background-color: ${(props) => props.color};
  height: 33%;
  width: 100%;
  padding: 10px;
  border:none;
`;
