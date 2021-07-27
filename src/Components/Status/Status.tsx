import React from "react";

import { Container, StatusName } from "./styles";
type Props = {
  text: string;
  color: string;
};
const Status: React.FC<Props> = ({ text, color }) => {
  return (
    <Container color={color}>
      <StatusName>{text}</StatusName>
    </Container>
  );
};

export default Status;
