import styled from 'styled-components'

export const RootStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 140px 1fr;
  grid-template-columns: 232px 1fr;
  padding: 32px;
  column-gap: 32px;
  row-gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 116px 1fr;
    gap: 0;
  } ;
`

export const HeaderSectionStyle = styled.header`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 40px;
  gap: 36px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    gap: 0;
    grid-template-rows: 1fr 42px;
  }
`

export const HeaderTopBarStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AddButtonStyle = styled.div`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 99;
  }
`

export const SidebarSectionStyle = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  grid-column: 1/2;
  grid-row: 1/3;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    display: none;
  }
`

export const MainSectionStyle = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: black transparent;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.neutral[3]};
    border: 0;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.neutral[2]};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${(props) => props.theme.palette.neutral[2]};
  }
  &::-webkit-scrollbar-track {
    background: none;
    border: 0;
    border-radius: 70px;
  }
  &::-webkit-scrollbar-track:hover {
    background: none;
  }
  &::-webkit-scrollbar-track:active {
    background: none;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`
