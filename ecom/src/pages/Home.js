import React from "react";
import styled from "styled-components";

function Home() {

  const Para = styled.p`
    color:  ${({ theme }) => theme.colors.black};
   
   
  `;

  return (
    <>
      <Para> Home </Para>
    </>
  );
}

export default Home;
