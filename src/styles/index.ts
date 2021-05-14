import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme: DefaultTheme = {
  accent: '#0095f6',
  bgColor: '#ffffff',
  fontColor: 'rgb(0, 0, 0)',
  borderColor: 'rgb(200, 200, 200)',
  borderRadius: '3px',
  thin: '100',
  light: '300',
  medium: '500',
};

export const darkTheme: DefaultTheme = {
  accent: '#0095f6',
  bgColor: '#FAFAFA',
  fontColor: 'rgb(38, 38, 38)',
  borderColor: 'rgb(200, 200, 200)',
  borderRadius: '3px',
  thin: '100',
  light: '300',
  medium: '500',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
`;
