import { createGlobalStyle } from 'styled-components';
import Neucha from '../fonts/Neucha-Regular.woff2';
import Lobster from '../fonts/Lobster-Regular.woff2';
import { DarkTheme, LightTheme } from './Themes';



const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Neucha';
        src: local('Neucha'), url(${Neucha}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lobster';
        src: local('Lobster'), url(${Lobster}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    body {
        margin: 0;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
`;

export {GlobalStyles, DarkTheme, LightTheme};