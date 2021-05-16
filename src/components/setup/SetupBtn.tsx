import styled from 'styled-components';

const SetupBtn = styled.button`
  margin-left: 10px;
  padding: 5px 18px;
  background-color: ${props => props.theme.bgColor};
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.medium};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease-out;
`;

export default SetupBtn;
