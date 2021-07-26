import React from "react";
import { Container } from "./styles";

type Props = {
  text: string;
  icon: string;
};
const PrimiryButton: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PrimiryButton;
