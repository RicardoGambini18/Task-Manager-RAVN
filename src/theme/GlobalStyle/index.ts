import { createGlobalStyle } from 'styled-components'
import Normalize from './Normalize'

const GlobalStyle = createGlobalStyle`
  /* Normalize CSS */
  ${Normalize}

  /* Custom Global CSS */
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  -apple-system,
                  BlinkMacSystemFont,
                  "Segoe UI",
                  Roboto,
                  Oxygen-Sans,
                  Ubuntu,
                  Cantarell,
                  "Helvetica Neue",
                  sans-serif;
  }
  html {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.palette.neutral[5]}
  }
  body, #root {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
