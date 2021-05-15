import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
`;
const SearchInput = styled.input`
  width: 300px;
  padding: 6px 20px 6px 10px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 6px;
  font-size: 18px;
  cursor: pointer;
`;

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBox;
