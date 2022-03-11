import pallete from './pallete'
import breakpoints from './breakpoints'
import typography from './typography'

const theme = {
  palette: {
    ...pallete,
  },
  breakpoints: {
    ...breakpoints,
  },
  typography: {
    ...typography,
  },
}

export default theme
export type ThemeType = typeof theme
