import styled from 'styled-components'

interface ModalStyleProps {
  open: boolean
}

export const RootStyle = styled.div<ModalStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  padding: 20px;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`
