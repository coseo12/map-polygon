import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useAddress } from '../../contexts/LocationContext';

const SearchContainer = styled.div`
  position: relative;
  -webkit-box-shadow: ${props => props.theme.shdow};
  box-shadow: ${props => props.theme.shdow};
`;
const SearchInput = styled.input`
  width: 400px;
  padding: 10px 20px 10px 10px;
  background-color: ${props => props.theme.bgColor};
  color: #aaa;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 11px;
  font-size: 13px;
  cursor: default;
`;

const SearchBox = () => {
  const { address } = useAddress();
  return (
    <SearchContainer>
      <SearchInput readOnly={true} value={address.full} />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBox;
