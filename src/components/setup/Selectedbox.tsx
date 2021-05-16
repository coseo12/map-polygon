import React from 'react';
import styled from 'styled-components';
import { useLocations, useSelectNames } from '../../contexts/LocationContext';
import { Cities } from '../../types';
import Selected from './Selected';

const SelectedBoxContainer = styled.div`
  margin-top: 20px;
`;
const Title = styled.div`
  padding: 0 15px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.h2};
  font-weight: ${props => props.theme.medium};
`;
const SelectedWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: #eee;
  padding: 1px;
`;

type SelectedBoxProps = {
  cities: Cities[];
  countryNames: string[];
};

const SelectedBox: React.FC<SelectedBoxProps> = ({ cities, countryNames }) => {
  const { cityName } = useSelectNames();
  const { locations } = useLocations();

  const names = countryNames.filter(name =>
    locations.some(
      lo => lo.geolocation.country === name && lo.geolocation.city === cityName
    )
  );

  if (names.length > 0) {
    const mod = names.length % 3;
    if (mod > 0) {
      for (let i = 0; i < 3 - mod; i++) {
        names.push('');
      }
    }
  }

  return (
    <SelectedBoxContainer>
      <Title>선택지역</Title>
      <SelectedWrap>
        {names
          ? names.map((name, i) => (
              <Selected key={i} id={i} text={name} cities={cities} />
            ))
          : null}
      </SelectedWrap>
    </SelectedBoxContainer>
  );
};

export default SelectedBox;
