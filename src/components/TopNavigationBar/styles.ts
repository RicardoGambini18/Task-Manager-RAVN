import styled from 'styled-components'

export const RootStyle = styled.nav`
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  display: grid;
  grid-template-columns: 20px 1fr 20px 40px;
  grid-template-areas: 'iconSearch search iconBell avatar';
  gap: 25px;
  align-items: center;
  border-radius: 16px;
  background: ${(props) => props.theme.palette.neutral[4]};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    border-radius: 0;
    grid-template-columns: 40px 1fr 20px 20px;
    gap: 15px;
    grid-template-areas: 'avatar search iconSearch iconBell';
  }
`

export const SearchStyle = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  font-weight: 400;
  grid-area: search;
  &:focus {
    outline: none;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`

export const WrapSearchButton = styled.div`
  grid-area: iconSearch;
  cursor: pointer;
`

export const TopBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
