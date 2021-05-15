import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(211, 211, 211, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 200;
`;

const Modal = ({ children }: { children: ReactNode }) => {
  return <ModalContainer>{children}</ModalContainer>;
};

export default Modal;
