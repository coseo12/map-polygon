import styled from 'styled-components';

const SetupContainer = styled.div`
  position: relative;
  width: 650px;
  min-height: 700px;
  background-color: ${props => props.theme.bgColor};
  -webkit-box-shadow: ${props => props.theme.shdow};
  box-shadow: ${props => props.theme.shdow};
  z-index: 300;
`;

export default SetupContainer;
