import React, { useState } from 'react';
import styled from 'styled-components';
import { Cities } from '../types';
import SetupBtn from './SetupBtn';
import SetupComboboxContainer from './SetupComboxContainer';

const SetupContainer = styled.div`
  width: 35vw;
  height: 70vh;
  background-color: ${props => props.theme.bgColor};
  -webkit-box-shadow: ${props => props.theme.shdow};
  box-shadow: ${props => props.theme.shdow};
  z-index: 300;
`;

const Title = styled.div`
  margin: 25px 15px 15px 15px;
  font-size: ${props => props.theme.h2};
  font-weight: ${props => props.theme.medium};
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  background-color: #eee;
  color: ${props => props.theme.fontColor};
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.light};
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 20px;
  background-color: #eee;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ButtonBoxContainer = styled.div`
  display: flex;
`;

const SelectorContainer = styled.div``;

type SetupProps = {
  cities: Cities[];
};
const Setup: React.FC<SetupProps> = ({ cities }) => {
  const [citiessort, setCitiessort] = useState(false);
  const [countriesSort, setCountriesSort] = useState(false);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setCitiessort(false);
    setCountriesSort(false);
  };

  return (
    <SetupContainer onClick={onClick}>
      <Title>지역 설정</Title>
      <Divider />
      <SearchBox>
        <SetupComboboxContainer
          cities={cities}
          citiessort={citiessort}
          countriesSort={countriesSort}
          setCitiessort={setCitiessort}
          setCountriesSort={setCountriesSort}
        />
        <ButtonBoxContainer>
          <SetupBtn>전체선택</SetupBtn>
          <SetupBtn>선택해제</SetupBtn>
        </ButtonBoxContainer>
      </SearchBox>
      <SubTitle>서울특별시</SubTitle>
      <SelectorContainer>Selector</SelectorContainer>
    </SetupContainer>
  );
};

export default Setup;
