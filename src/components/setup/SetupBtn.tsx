import styled from 'styled-components';

const SetupBtn = styled.button`
  margin-left: 10px;
  padding: 5px 18px;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontColor};
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.bold};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease-out;
  :hover {
    border: 1px solid ${props => props.theme.baseColor};
    color: ${props => props.theme.baseColor};
  }
`;

export default SetupBtn;
