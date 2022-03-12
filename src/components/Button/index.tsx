import React, { ReactElement, FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import { RootStyle } from './styles'
import { SvgProps } from '../../svg/StyledSvg'

interface OnClickFunc {
  (): void
}

interface ButtonProps {
  variant?: string
  icon?: FunctionComponent<SvgProps>
  active?: boolean
  disabled?: boolean
  onClick?: OnClickFunc
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  icon: Icon,
  children,
  active,
  disabled,
  onClick,
  type,
}): ReactElement => {
  const theme = useTheme()

  const getIconColor = (): string => {
    if (disabled && !active) {
      return theme.palette.neutral[2]
    }
    if (active && variant === 'outlined') {
      return theme.palette.primary[4]
    }
    return theme.palette.neutral[1]
  }

  return (
    <RootStyle
      variant={variant || 'contained'}
      icon={Boolean(Icon)}
      active={Boolean(active)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {Icon && <Icon color={getIconColor()} />}
      {children}
    </RootStyle>
  )
}

Button.defaultProps = {
  variant: 'contained',
  icon: undefined,
  active: false,
  disabled: false,
  onClick: () => {
    // empty function
  },
  type: 'button',
}

export default Button
