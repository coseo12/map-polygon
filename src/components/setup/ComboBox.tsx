import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ComboBoxContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1fr);
  height: 25px;
  width: 170px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  font-size: ${props => props.theme.h3};
`;

const ArrowIconConatainer = styled.div`
  position: absolute;
  top: 2px;
  right: 5px;
  display: flex;
`;

const SelectTitle = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const ListContainer = styled.ul`
  width: 170px;
  background-color: #fff;
  margin-top: 10px;
  margin-left: 0;
  display: block;
  border: 1px solid ${props => props.theme.borderColor};
  border-top: 0;
  z-index: 100;
`;

const List = styled.li`
  padding: 8px 5px;
  font-weight: ${props => props.theme.medium};
  cursor: pointer;
  color: ${props => (props.color === 'ok' ? props.theme.baseColor : 'inherit')};
  :hover {
    background-color: ${props => props.theme.baseColor};
    color: #fff;
  }
`;

const Placeholder = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.5;
`;

type ComboBoxProps = {
  sort: boolean;
  onSort(): void;
  items: string[];
  placeholder?: string;
  defaultItem?: string;
  fn(name: string): void;
  all?: boolean;
};

const ComboBox: React.FC<ComboBoxProps> = ({
  sort,
  onSort,
  placeholder,
  items,
  defaultItem,
  fn,
}) => {
  const [selected, setSelected] = useState('');

  const onClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    onSort();
  };

  const onSelected = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (!(event.target instanceof HTMLLIElement)) {
      return;
    }
    const { value } = event.target.dataset;
    if (value) {
      fn(value);
      setSelected(value);
    }
  };

  useEffect(() => {
    if (defaultItem) {
      const str = items?.find(a => a === defaultItem);
      setSelected(str || '');
    } else {
      setSelected('');
    }
    return () => {};
  }, [items]);

  return (
    <ComboBoxContainer onClick={onClose}>
      {selected !== '' ? (
        <SelectTitle>{selected}</SelectTitle>
      ) : (
        <Placeholder>{placeholder}</Placeholder>
      )}
      {sort ? (
        <ListContainer onClick={onSelected}>
          {items
            ? items.map((item, idx) => (
                <List
                  color={item === selected ? 'ok' : ''}
                  key={idx}
                  className={'list'}
                  data-value={item}
                  data-id={idx}
                >
                  {item}
                </List>
              ))
            : null}
        </ListContainer>
      ) : null}
      <ArrowIconConatainer>
        <FontAwesomeIcon icon={!sort ? faSortDown : faSortUp} />
      </ArrowIconConatainer>
    </ComboBoxContainer>
  );
};

export default ComboBox;
