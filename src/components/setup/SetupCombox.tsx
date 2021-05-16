import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ComboBox from './ComboBox';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cities } from '../../types';
import { getCityNames, getCountryNames } from '../../api';
import { useSelectNames } from '../../contexts/LocationContext';

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
  const [searchList, setSearchList] = useState<Cities>();
  const {
    setCityName,
    cityNames,
    setCityNames,
    setCountryName,
    countryNames,
    setCountryNames,
  } = useSelectNames();

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

  const init = () => {
    getCityNames().then(res => {
      setCityNames(() => res);
    });
    setCityName(() => cities[0].city);
    onCityName(cities[0].city);
  };

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
        defaultItem={cities[0].city}
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
        all={true}
      />
    </ComboBoxContainer>
  );
};

export default SetupComboboxContainer;
