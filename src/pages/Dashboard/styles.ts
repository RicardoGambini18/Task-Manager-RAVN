import styled from 'styled-components'

export const RootStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 20px 16px;
  }
`
