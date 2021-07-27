import styled from "styled-components/native";
import { colors } from "../../Themes/colors";

type Props = {
  color: string;
};
export const Container = styled.View<Props>`
  background: ${(props) => props.color};
  max-width: 50%;
  width: 50%;
  height: 46px;
  border-radius: 28px;

  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const StatusName = styled.Text`
  color: ${colors.backgroud};
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
`;
