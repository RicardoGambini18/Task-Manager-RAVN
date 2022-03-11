import styled, { StyledProps } from 'styled-components'

interface StyledButtonProps {
  variant: string
  icon: boolean
  active?: boolean
}

interface ColorProps {
  default: string
  hover: string
  disabled: string
}

const getBackgroundColor = (props: StyledProps<StyledButtonProps>): ColorProps => {
  if (props.variant === 'outlined') {
    return {
      default: 'rgba(0,0,0,0)',
      hover: 'rgba(0,0,0,0)',
      disabled: 'rgba(0,0,0,0)',
    }
  }
  if (props.active) {
    return {
      default: props.theme.palette.primary[4],
      hover: props.theme.palette.primary[3],
      disabled: props.theme.palette.primary[2],
    }
  }
  return {
    default: 'rgba(0,0,0,0)',
    hover: props.theme.palette.neutral[4],
    disabled: props.theme.palette.neutral[5],
  }
}

export const RootStyle = styled.button<StyledButtonProps>`
  width: ${(props) => (props.icon ? '40px' : 'auto')};
  height: ${(props) => (props.icon ? '40px' : 'auto')};
  padding: 8px;
  border-radius: 8px;
  border-width: ${(props) => (props.variant === 'outlined' && props.active ? '1px' : '0px')};
  border-color: ${(props) => props.active && props.theme.palette.primary[4]};
  border-style: solid;
  color: ${(props) => props.theme.palette.neutral[1]};
  background-color: ${(props) => getBackgroundColor(props).default};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) =>
    props.icon ? '0' : `${props.theme.typography.android.body.M.lineHeight}px`};
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  font-weight: 400;
  transition: 0.3s all;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => getBackgroundColor(props).hover};
  }
  &:disabled {
    background-color: ${(props) => getBackgroundColor(props).disabled};
    color: ${(props) =>
      props.active ? props.theme.palette.neutral[1] : props.theme.palette.neutral[2]};
  }
`
