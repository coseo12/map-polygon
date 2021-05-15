import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

export const lightTheme: DefaultTheme = {
  accent: '#0095f6',
  bgColor: '#ffffff',
  baseColor: '#008d9b',
  fontColor: 'rgb(0, 0, 0)',
  borderColor: 'rgb(200, 200, 200)',
  borderRadius: '3px',
  thin: '100',
  light: '300',
  medium: '500',
  bold: '700',
  shdow: '6px 6px 15px 3px rgba(0, 0, 0, 0.3)',
  h1: '20px',
  h2: '15px',
  h3: '12px',
};

export const darkTheme: DefaultTheme = {
  accent: '#0095f6',
  bgColor: '#FAFAFA',
  baseColor: '#008d9b',
  fontColor: 'rgb(38, 38, 38)',
  borderColor: 'rgb(200, 200, 200)',
  borderRadius: '3px',
  thin: '100',
  light: '300',
  medium: '500',
  bold: '700',
  shdow: '6px 6px 15px 3px rgba(0, 0, 0, 0.3)',
  h1: '20px',
  h2: '15px',
  h3: '12px',
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
