import React from 'react';
import styled from 'styled-components';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Modal from '../components/Modal';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  header {
    position: fixed;
    background-color: transparent;
    z-index: 100;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Modal>
        <Loader />
      </Modal>
      <Header />
      <GoogleMap />
    </HomeContainer>
  );
};

export default Home;
