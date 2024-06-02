import React from 'react';
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="spinner">
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Loader;


const Wrapper = styled.div`
/* Add this CSS in your styles file */
.spinner {
margin: 50px auto;
width: 40px;
height: 40px;
position: relative;
text-align: center;
animation: spin 2s infinite linear;
}

.spinner div {
width: 100%;
height: 100%;
border-radius: 50%;
background: #6254f3;
opacity: 0.6;
position: absolute;
top: 0;
left: 0;
animation: bounce 2s infinite ease-in-out;
}

.spinner div:nth-child(2) {
animation-delay: -1s;
}

@keyframes spin {
100% {
transform: rotate(360deg);
}
}

@keyframes bounce {
0%, 100% {
transform: scale(0);
}
50% {
transform: scale(1);
}
}

`;

