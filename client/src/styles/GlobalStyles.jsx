import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    *, *::before, *::after{ 
        box-sizing: border-box; 
        padding: 0; 
        margin: 0;
    }  

    body{ 
        line-height: 1.6; 
        min-height: 100vh; 
        font-family: 'IBM Plex Sans Arabic', sans-serif;
    } 

    input,button,textarea{ 
        font-family: inherit;
    }

    ul{ 
        list-style: none;
    }
`;

export default GlobalStyle;
