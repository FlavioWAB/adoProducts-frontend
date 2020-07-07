import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  #app {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
