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

  /* React Datepicker styles */
  .react-datepicker__header {
    background-color: ${(props) => props.theme.palette.neutral[5]};
    border-bottom-color: ${(props) => props.theme.palette.neutral[5]};
  }
  .react-datepicker__current-month {
    color: ${(props) => props.theme.palette.neutral[1]};
    border-bottom: 1px solid ${(props) => props.theme.palette.neutral[2]};
    padding-bottom: 10px;
  }
  .react-datepicker__day--today {
    background: rgba(255,255,255,0.05);
    font-weight: black;
  }
  .react-datepicker__day {
    color: ${(props) => props.theme.palette.neutral[1]};
    &:hover {
      background: rgba(255,255,255, 0.1);
    }
  }
  .react-datepicker__day--selected {
    background: ${(props) => props.theme.palette.primary[4]};
  }
  .react-datepicker {
    background-color: ${(props) => props.theme.palette.neutral[5]};
    color: ${(props) => props.theme.palette.neutral[1]};
    border: 1px solid ${(props) => props.theme.palette.neutral[2]};
  }
  .react-datepicker__day-name {
    color: ${(props) => props.theme.palette.neutral[1]};
  }
  .react-datepicker__triangle {
    display: none !important;
    &::after {
      border-bottom-color: ${(props) => props.theme.palette.neutral[5]} !important;
    }
    &::before {
      border-bottom-color: ${(props) => props.theme.palette.neutral[5]} !important;
    }
  }
  .react-datepicker__navigation {
    top: 7px;
  }
`

export default GlobalStyle
