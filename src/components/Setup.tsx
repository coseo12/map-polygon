import { faChevronRight, faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCityNames, getCountryNames } from '../api';
import { useCities } from '../contexts/LocationContext';
import { Cities } from '../types';
import ComboBox from './ComboBox';
import SetupBtn from './SetupBtn';

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

const ComboBoxContainer = styled.div`
  display: flex;
`;

const ButtonBoxContainer = styled.div`
  display: flex;
`;

const ArrowIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  opacity: 0.2;
`;

const SelectorContainer = styled.div``;

const Setup = () => {
  const [citiessort, setCitiessort] = useState(false);
  const [countriesSort, setCountriesSort] = useState(false);
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [cityName, setCityName] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');
  const [searchList, setSearchList] = useState<Cities>();
  const { cities } = useCities();

  const onCitiessort = () => {
    setCitiessort(!citiessort);
  };

  const onCountriesSort = () => {
    setCountriesSort(!countriesSort);
  };

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setCitiessort(false);
    setCountriesSort(false);
  };

  const onCityName = (name: string) => {
    setCityName(name);
    setCountryName('');
    setList(name);
    if (!searchList) {
      return;
    }
    onCountryNames(searchList);
  };

  const onCountryName = (name: string) => {
    setCountryName(name);
  };

  const onCountryNames = async (list: Cities) => {
    if (!list) {
      return;
    }
    const names = await getCountryNames(list?.locations);
    setCountryNames(names);
  };

  const setList = async (name: string) => {
    const list = await cities.find(city => city.city === name);
    if (!list) {
      return;
    }
    setSearchList(list);
    onCountryNames(list);
  };

  const init = async () => {
    const items = await getCityNames();
    await setCityNames(items);
    await setCityName(items[0]);
  };

  useEffect(() => {
    setList(cityName);
  }, [cities]);

  useEffect(() => {
    init();
    return () => {};
  }, []);

  return (
    <SetupContainer onClick={onClick}>
      <Title>지역 설정</Title>
      <Divider />
      <SearchBox>
        <ComboBoxContainer>
          <ComboBox
            items={cityNames}
            sort={citiessort}
            onSort={onCitiessort}
            defaultItem={cityNames[0]}
            placeholder={'시 선택'}
            fn={onCityName}
          />
          <ArrowIconContainer>
            <FontAwesomeIcon icon={faChevronRight} />
          </ArrowIconContainer>
          <ComboBox
            items={countryNames}
            sort={countriesSort}
            placeholder={'구 선택'}
            onSort={onCountriesSort}
            fn={onCountryName}
          />
        </ComboBoxContainer>
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
