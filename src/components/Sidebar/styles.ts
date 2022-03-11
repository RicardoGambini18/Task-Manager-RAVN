import styled from 'styled-components'

export const RootStyle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-color: ${(props) => props.theme.palette.neutral[4]};
`
export const LogoContainer = styled.div`
  width: 100%;
  padding: 14px 0 46px;
  display: flex;
  justify-content: center;
`
