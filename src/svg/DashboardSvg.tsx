import React, { FunctionComponent, ReactElement } from 'react'
import StyledSvg, { SvgProps } from './StyledSvg'

const DashboardSvg: FunctionComponent<SvgProps> = ({ width, height, color }): ReactElement => {
  return (
    <StyledSvg
      width={width || 18}
      height={height || 18}
      color={color || '#94979A'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M0 0H8V8H0V0ZM0 10H8V18H0V10ZM10 0H18V8H10V0ZM10 10H18V18H10V10ZM12 2V6H16V2H12ZM12 12V16H16V12H12ZM2 2V6H6V2H2ZM2 12V16H6V12H2Z"
        fill="#94979A"
      />
    </StyledSvg>
  )
}

export default DashboardSvg