import styled from "styled-components/native";
import { colors } from "../../Themes/colors";

export const Container = styled.TouchableOpacity`
  background: ${colors.buttons};
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 40%;
  height: 65px;
  border-radius: 8px;
  margin: 5px;
  padding: 0px;
`;
