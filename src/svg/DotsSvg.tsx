import React, { FunctionComponent, ReactElement } from 'react'
import StyledSvg, { SvgProps } from './StyledSvg'

const DotsSvg: FunctionComponent<SvgProps> = ({ width, height, color }): ReactElement => {
  return (
    <StyledSvg
      width={width || 18}
      height={height || 4}
      color={color || '#94979A'}
      viewBox="0 0 18 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z"
        fill="#94979A"
      />
    </StyledSvg>
  )
}

export default DotsSvg
