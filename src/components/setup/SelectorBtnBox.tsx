import React from 'react';
import SetupBtn from './SetupBtn';
import styled from 'styled-components';
import { Cities } from '../../types';
import { useLocations, useSelectNames } from '../../contexts/LocationContext';

const ButtonBoxContainer = styled.div`
  display: flex;
  button {
    &:first-child {
      background-color: ${props => props.theme.baseColor};
      color: #fff;
      padding: 8px 25px;
      :hover {
        border: 1px solid ${props => props.theme.baseColor};
        color: ${props => props.theme.baseColor};
        background-color: #fff;
      }
    }
    &:last-child {
      padding: 8px 25px;
      :hover {
        background-color: #fff;
        color: ${props => props.theme.baseColor};
      }
    }
  }
`;

type SelectorBtnBoxProps = {
  cities: Cities[];
};

const SelectorBtnBox: React.FC<SelectorBtnBoxProps> = ({ cities }) => {
  const { countryNames, countryName, cityName } = useSelectNames();
  const { addLocation, removeLocation } = useLocations();
  const enabled = () => {
    const city = cities.filter(c => c.city === cityName);
    if (!countryName) {
      for (const c of countryNames) {
        const country = city[0].locations.filter(a => a.country === c);
        for (const d of country) {
          addLocation(d, false);
        }
      }
    } else {
      const country = city[0].locations.filter(a => a.country === countryName);
      for (const d of country) {
        addLocation(d, false);
      }
    }
  };

  const disabled = () => {
    if (!countryName) {
      for (const c of countryNames) {
        removeLocation(cityName, c);
      }
    } else {
      removeLocation(cityName, countryName);
    }
  };
  return (
    <ButtonBoxContainer>
      <SetupBtn onClick={enabled}>전체선택</SetupBtn>
      <SetupBtn onClick={disabled}>선택해제</SetupBtn>
    </ButtonBoxContainer>
  );
};

export default SelectorBtnBox;
