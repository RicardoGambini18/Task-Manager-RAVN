import styled from 'styled-components'

interface RootStyleProps {
  active: boolean
}

export const RootStyle = styled.div<RootStyleProps>`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;
  background: ${(props) =>
    props.active
      ? 'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)'
      : 'transparent'};
  svg {
    margin-right: 20px;
  }
`
