import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.25rem;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
`;

const Container = styled.main`
  display: block;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <Container>
      <Title>Welcome to the Basic Template for React + TypeScript!</Title>
      <Subtitle>Subtítulo</Subtitle>
    </Container>
  );
}
