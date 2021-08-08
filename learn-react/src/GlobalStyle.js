import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff
        --lightGrey: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif; //, 'Courier New', Courier,  'Oxygen', 'Ubuntu', 'Droid Sans';
    }
    body {
        margin: 0;
        padding:0 ;
//        -webkit-font-smoothing: antialiased;
//        -moz-osx-font-smoothing: grayscale;


        h1 {
            font-size: 1rem;
            font-weight: 600;
            color: var(---white);
        }

        h3 {
            font-size: 1rem;
            font-weight: 600;

        }

        p {
            font-size: 1rem;
            color: var(---white);
        }
    }
`;


