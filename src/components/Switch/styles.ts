import styled from 'styled-components'

interface TabProps {
  position?: string
  active?: boolean
}

export const RootStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.neutral[4]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`
export const TabStyle = styled.div<TabProps>`
  width: 100%;
  height: 100%;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${(props) =>
    props.active ? props.theme.palette.primary[4] : props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.S.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.S.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.S.spacing}px;
  font-weight: 400;
  transition: 0.3s all;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: ${(props) => (props.position === 'right' ? '0' : 'auto')};
    right: ${(props) => (props.position === 'left' ? '0' : 'auto')};
    width: ${(props) => (props.active ? '100%' : '0')};
    height: 2px;
    background-color: ${(props) => props.theme.palette.primary[4]};
    transition: 0.3s all;
  }
`

export const DesktopRootStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
