import styled from 'styled-components';

const CityName = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 15px;
  padding-top: 5px;
  background-color: #eee;
  color: ${props => props.theme.fontColor};
  font-size: ${props => props.theme.h3};
  font-weight: ${props => props.theme.medium};
  opacity: 0.7;
`;

export default CityName;
