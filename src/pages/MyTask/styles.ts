import styled from 'styled-components'

const gridColDistribution = '1fr 180px 120px 168px 163px'
const gridRowDistribution = 'repeat(auto-fit, 56px)'

export const RootStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 980px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 20px 16px;
  }
`

export const TableTitle = styled.table`
  width: 100%;
  display: grid;
  grid-template-rows: ${gridRowDistribution};
  grid-template-columns: ${gridColDistribution};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.neutral[3]};
  background-color: ${(props) => props.theme.palette.neutral[4]};
  td {
    border-right: 1px solid ${(props) => props.theme.palette.neutral[3]};
  }
  td:last-of-type {
    border-right: none;
  }
`

export const SimpleCell = styled.td`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  img {
    margin-right: 8px;
  }
`

export const Table = styled.table`
  display: grid;
  width: 100%;
  border-radius: 4px 4px 0 0;
  border: 1px solid ${(props) => props.theme.palette.neutral[3]};
  background-color: ${(props) => props.theme.palette.neutral[4]};
`
export const TableHead = styled.thead`
  width: 100%;
  display: grid;
  grid-template-rows: ${gridRowDistribution};
  border-bottom: 1px solid ${(props) => props.theme.palette.neutral[3]};
`

interface TableBodyProps {
  open: boolean
  items: number
}

export const TableBody = styled.tbody<TableBodyProps>`
  width: 100%;
  display: grid;
  grid-template-rows: ${gridRowDistribution};
  max-height: ${(props) => (props.open ? `calc(56px * ${props.items})` : 0)};
  overflow: hidden;
  transition: 0.5s all;
  tr {
    border-bottom: 1px solid ${(props) => props.theme.palette.neutral[3]};
  }
  tr:last-of-type {
    border-bottom: none;
  }
`

export const TableRow = styled.tr`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${gridColDistribution};
  grid-template-rows: ${gridRowDistribution};
  td {
    border-right: 1px solid ${(props) => props.theme.palette.neutral[3]};
  }
  td:last-of-type {
    border-right: none;
  }
`

export const TableHeader = styled.th`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 5;
  display: flex;
  align-items: center;
  padding: 0 22px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.L.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.L.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.L.spacing}px;
  span {
    color: ${(props) => props.theme.palette.neutral[2]};
    margin-left: 5px;
  }
  svg {
    margin-right: 14px;
  }
`

interface NameCellProps {
  lineColor: string
}

export const NameCell = styled.td<NameCellProps>`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 40px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 48px;
    background: ${(props) => props.lineColor};
    top: 4px;
    left: 0;
  }
`

interface TagStyleProps {
  textColor?: string
  bgColor?: string
}

export const TagStyle = styled.div<TagStyleProps>`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  color: ${(props) => props.textColor || props.theme.palette.neutral[1]};
  background-color: ${(props) => props.bgColor || 'rgba(148, 151, 154, 0.1)'};
  &:first-child {
    margin-right: 6px;
  }
`

interface SwitchProps {
  open: boolean
}

export const WrapSwitchIcon = styled.div<SwitchProps>`
  width: 12px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  transform: ${(props) => (!props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  svg {
    margin: 0;
  }
`
