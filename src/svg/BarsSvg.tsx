import React, { FunctionComponent, ReactElement } from 'react'
import StyledSvg, { SvgProps } from './StyledSvg'

const BarsSvg: FunctionComponent<SvgProps> = ({ width, height, color }): ReactElement => {
  return (
    <StyledSvg
      width={width || 18}
      height={height || 16}
      color={color || '#94979A'}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#94979A" />
    </StyledSvg>
  )
}

export default BarsSvg
