import React from 'react';
import styled from 'styled-components';
import { useSetup } from '../contexts/LocationContext';
import SearchBtn from './SearchBtn';
import SearchBox from './SearchInput';

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  margin-top: 20px;
`;

const Header = () => {
  const { setSetup } = useSetup();

  return (
    <HeaderContainer>
      <SearchBox />
      <SearchBtn onClick={() => setSetup(true)}>지역 설정</SearchBtn>
    </HeaderContainer>
  );
};

export default Header;
