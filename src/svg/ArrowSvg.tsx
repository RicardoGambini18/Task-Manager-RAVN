import React, { FunctionComponent, ReactElement } from 'react'
import StyledSvg, { SvgProps } from './StyledSvg'

const ArrowSvg: FunctionComponent<SvgProps> = ({ width, height, color }): ReactElement => {
  return (
    <StyledSvg
      width={width || 12}
      height={height || 6}
      color={color || '#94979A'}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L0 0H12L6 6Z" fill="#94979A" />
    </StyledSvg>
  )
}

export default ArrowSvg
