import styled, { StyledProps } from 'styled-components'
import { StyledTypographyProps, ThemeTypographyProps } from './types'
import { isIOS } from '../../utils'

const getTypographyVariant = (
  props: StyledProps<StyledTypographyProps>,
  isDektop = false
): ThemeTypographyProps => {
  return isIOS() && !isDektop
    ? props.theme.typography.ios[props.variant?.ios || 'body'][props.size?.ios || 'M']
    : props.theme.typography.android[props.variant?.android || 'body'][
        props.size?.android || 'M'
      ] || props.theme.typography.android[props.variant?.android || 'body'].M
}

const StyledTypography = styled.p<StyledTypographyProps>`
  transition: 0.3s all;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  font-size: ${(props) => getTypographyVariant(props, true).fontSize}px;
  line-height: ${(props) => getTypographyVariant(props, true).lineHeight}px;
  letter-spacing: ${(props) => getTypographyVariant(props, true).spacing}px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: ${(props) => getTypographyVariant(props).fontSize}px;
    line-height: ${(props) => getTypographyVariant(props).lineHeight}px;
    letter-spacing: ${(props) => getTypographyVariant(props).spacing}px;
  }
`

export default StyledTypography
