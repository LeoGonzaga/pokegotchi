import React from "react";

import { Container, StatusName } from "./styles";
type Props = {
  text: string;
};
const Status: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <StatusName>{text}</StatusName>
    </Container>
  );
};

export default Status;
