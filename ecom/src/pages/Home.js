import React from "react";
import styled from "styled-components";

const Para = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

function Home() {
  return (
    <>
      <Para> Home </Para>
    </>
  );
}

export default Home;
