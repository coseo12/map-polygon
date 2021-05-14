import styled from 'styled-components';

const SearchBtn = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontColor};
  font-weight: ${props => props.theme.medium};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
`;

export default SearchBtn;
