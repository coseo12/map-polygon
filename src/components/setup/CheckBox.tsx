import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useLocations, useSelectNames } from '../../contexts/LocationContext';
import { Cities } from '../../types';

const CheckBoxContainer = styled.div`
  position: relative;
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.light};
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`;

const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.label`
  margin-left: 5px;
  cursor: pointer;
`;

const Check = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid
    ${props => (props.color ? props.theme.baseColor : props.theme.borderColor)};
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 11px;
  left: 11px;
  font-size: 10px;
  color: ${props => props.theme.baseColor};
`;

type CheckBoxProps = {
  cities: Cities[];
  id: number;
  text: string;
  checked: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({ id, text, checked, cities }) => {
  const { addLocation, removeLocation } = useLocations();
  const { cityName } = useSelectNames();

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    const checked = event.target.dataset.checked === 'true' ? true : false;
    const text = event.target.dataset.text;
    if (!text) {
      return;
    }
    if (!checked) {
      const city = cities.filter(c => c.city === cityName);
      const country = city[0].locations.filter(c => c.country === text);
      for (const c of country) {
        addLocation(c);
      }
    } else {
      removeLocation(cityName, text);
    }
  };

  return (
    <CheckBoxContainer>
      {text ? (
        <CheckBoxWrap data-text={text} data-checked={checked} onClick={onClick}>
          <Check
            color={checked ? 'baseColor' : ''}
            data-text={text}
            data-checked={checked}
          />
          {checked ? (
            <CheckIcon data-text={text} data-checked={checked}>
              <FontAwesomeIcon
                icon={faCheck}
                data-text={text}
                data-checked={checked}
              />
            </CheckIcon>
          ) : null}
          <Label htmlFor={`c_${id}`} data-text={text} data-checked={checked}>
            {text}
          </Label>
        </CheckBoxWrap>
      ) : null}
    </CheckBoxContainer>
  );
};

export default CheckBox;
