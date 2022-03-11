import styled from 'styled-components'

export interface SvgProps {
  color?: string
  width?: number
  height?: number
}

const StyledSvg = styled.svg<SvgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  transition: 0.3s all;
  path {
    fill: ${(props) => props.color};
  }
`

export default StyledSvg
