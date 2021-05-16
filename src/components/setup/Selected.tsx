import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useLocations, useSelectNames } from '../../contexts/LocationContext';
import { Cities } from '../../types';

const SelectedContainer = styled.div`
  position: relative;
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.light};
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 10px;
  color: #bbb;
  font-weight: ${props => props.theme.thin};
  cursor: pointer;
`;

type SelectedProps = {
  cities: Cities[];
  id: number;
  text: string;
};

const Selected: React.FC<SelectedProps> = ({ cities, id, text }) => {
  const { removeLocation } = useLocations();
  const { cityName } = useSelectNames();

  const onClick = () => {
    removeLocation(cityName, text);
  };

  return (
    <SelectedContainer>
      {text ? (
        <>
          <div>{text}</div>
          <DeleteIcon onClick={onClick} data-text={text}>
            <FontAwesomeIcon icon={faTimes} onClick={e => {}} />
          </DeleteIcon>
        </>
      ) : null}
    </SelectedContainer>
  );
};

export default Selected;
