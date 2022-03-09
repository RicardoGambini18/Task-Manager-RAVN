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
  }
`

export default GlobalStyle
