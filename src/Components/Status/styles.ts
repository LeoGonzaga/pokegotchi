import styled from "styled-components/native";
import { colors } from "../../Themes/colors";

export const Container = styled.View`
  background: ${colors.pokename};
  max-width: 50%;
  width: 50%;
  height: 46px;
  border-radius: 28px;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StatusName = styled.Text`
  color: ${colors.backgroud};
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
