import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getMapData } from '../api';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Setup from '../components/Setup';
import { useCities, useLoading, useSetup } from '../contexts/LocationContext';

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
  const { loading } = useLoading();
  const { setup } = useSetup();
  const { cities, setCities } = useCities();

  const init = async () => {
    const items = await getMapData();
    setCities(items);
  };

  useEffect(() => {
    init();
    return () => {};
  }, []);

  return (
    <HomeContainer>
      {loading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      {setup ? (
        <Modal>
          <Setup cities={cities} />
        </Modal>
      ) : null}
      <Header />
      <GoogleMap />
    </HomeContainer>
  );
};

export default Home;
