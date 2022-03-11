import React, { FunctionComponent, ReactElement } from 'react'
import StyledSvg, { SvgProps } from './StyledSvg'

const PlusSvg: FunctionComponent<SvgProps> = ({ width, height, color }): ReactElement => {
  return (
    <StyledSvg
      width={width || 14}
      height={height || 14}
      color={color || '#FFFFFF'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="white" />
    </StyledSvg>
  )
}

export default PlusSvg
