import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelectNames, useSetup } from '../../contexts/LocationContext';
import { Cities } from '../../types';
import SelectorBox from './SelectorBox';
import SetupComboboxContainer from './SetupCombox';
import SetupContainer from './SetupContainer';
import CityName from './CityName';
import Title from './Title';
import SelectorBtnBox from './SelectorBtnBox';
import SelectedBox from './Selectedbox';
import SetupBtn from './SetupBtn';

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

const CloseBtnContainer = styled.div`
  position: relative;
  bottom: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    background-color: ${props => props.theme.baseColor};
    padding: 10px 40px;
    border-radius: ${props => props.theme.borderRadius};
    color: #fff;
    font-weight: ${props => props.theme.medium};
    :hover {
      background-color: #fff;
      color: ${props => props.theme.baseColor};
    }
  }
`;

type SetupProps = {
  cities: Cities[];
};
const Setup: React.FC<SetupProps> = ({ cities }) => {
  const [citiessort, setCitiessort] = useState(false);
  const [countriesSort, setCountriesSort] = useState(false);
  const { cityName, countryNames } = useSelectNames();
  const { setSetup } = useSetup();

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
        <SelectorBtnBox cities={cities} />
      </SearchBox>
      <CityName>{cityName}</CityName>
      <SelectorBox cities={cities} countryNames={countryNames} />
      <SelectedBox cities={cities} countryNames={countryNames} />
      <CloseBtnContainer>
        <SetupBtn onClick={() => setSetup(false)}>지역 선택 완료</SetupBtn>
      </CloseBtnContainer>
    </SetupContainer>
  );
};

export default Setup;
