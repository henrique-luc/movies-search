import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    body {
        background-color: #291166;
        color: #fff;
    }

    button {
        cursor: pointer;
    }

    figcaption {
        display:none;
    }
`;
