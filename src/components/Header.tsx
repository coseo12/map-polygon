import React from 'react';
import styled from 'styled-components';
import SearchBtn from './SearchBtn';
import SearchBox from './SearchInput';

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  margin-top: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBox />
      <SearchBtn>지역 설정</SearchBtn>
    </HeaderContainer>
  );
};

export default Header;
