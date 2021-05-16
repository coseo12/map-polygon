import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ComboBox from './ComboBox';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cities } from '../types';
import { getCityNames, getCountryNames } from '../api';

const ComboBoxContainer = styled.div`
  display: flex;
`;

const ArrowIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  opacity: 0.2;
`;

type SetupComboboxProps = {
  cities: Cities[];
  citiessort: boolean;
  countriesSort: boolean;
  setCitiessort: React.Dispatch<React.SetStateAction<boolean>>;
  setCountriesSort: React.Dispatch<React.SetStateAction<boolean>>;
};

const SetupComboboxContainer: React.FC<SetupComboboxProps> = ({
  cities,
  citiessort,
  countriesSort,
  setCitiessort,
  setCountriesSort,
}) => {
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [cityName, setCityName] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');
  const [searchList, setSearchList] = useState<Cities>();

  const onCitiessort = () => {
    setCitiessort(!citiessort);
    setCountriesSort(false);
  };

  const onCountriesSort = () => {
    setCitiessort(false);
    setCountriesSort(!countriesSort);
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
  );
};

export default SetupComboboxContainer;
