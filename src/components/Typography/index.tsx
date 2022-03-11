import React, { FunctionComponent, ReactElement } from 'react'
import StyledTypography from './styles'
import { ComponentTypographyProps } from './types'

const Typography: FunctionComponent<ComponentTypographyProps> = ({
  component,
  variant = {},
  size = {},
  fontWeight = 400,
  children,
  color = '#FFFFFF',
}): ReactElement => {
  return (
    <StyledTypography
      variant={variant}
      as={component}
      size={size}
      color={color}
      fontWeight={fontWeight}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
