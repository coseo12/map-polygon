import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  span {
    width: 10px;
    height: 100px;
    margin: 0 10px;
    background: ${props => props.theme.baseColor};
    animation: animate 1.4s linear infinite;
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    animation-delay: 0.8s;
  }
  span:nth-child(6) {
    animation-delay: 1s;
  }
  span:nth-child(7) {
    animation-delay: 1.2s;
  }
  @keyframes animate {
    0% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(-50px) scale(1);
    }
    50% {
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      opacity: 1;
      transform: translateX(0px) scale(1.2);
    }
    100% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(50px) scale(1);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </LoaderContainer>
  );
};

export default Loader;
