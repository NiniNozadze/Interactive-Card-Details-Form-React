import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: 'Space Grotesk', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    position:relative;
}
`;
export default GlobalStyles;
