import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import styled from 'styled-components';
import { useLocations, useSelectNames } from '../../contexts/LocationContext';
import { Cities } from '../../types';
import CheckBox from './CheckBox';

const SelectorContainer = styled.div`
  min-height: 300px;
`;
const SelectorWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: #eee;
  padding: 1px;
`;
type SelectorBoxProps = {
  cities: Cities[];
  countryNames: string[];
};

const SelectorBox: React.FC<SelectorBoxProps> = ({ cities, countryNames }) => {
  const { cityName, countryName } = useSelectNames();
  const { locations } = useLocations();

  const names = !countryName
    ? [...countryNames]
    : countryNames.filter(name => name === countryName);

  const mod = countryNames.length % 3;
  if (mod > 0) {
    for (let i = 0; i < 3 - mod; i++) {
      names.push('');
    }
  }

  return (
    <SelectorContainer>
      <SelectorWrap>
        {names
          ? names.map((name, i) => (
              <CheckBox
                key={i}
                id={i}
                text={name}
                cities={cities}
                checked={locations.some(
                  lo =>
                    lo.geolocation.country === name &&
                    lo.geolocation.city === cityName
                )}
              />
            ))
          : null}
      </SelectorWrap>
    </SelectorContainer>
  );
};

export default SelectorBox;
