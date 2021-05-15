import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useSetup } from '../contexts/LocationContext';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const Modal = ({ children }: { children: ReactNode }) => {
  const { setSetup } = useSetup();

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setSetup(false);
  };

  return (
    <ModalContainer className="modal" onClick={onClick}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
