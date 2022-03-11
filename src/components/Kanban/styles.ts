import styled from 'styled-components'
import { StyledDateProps } from './types'

export const KanbanStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 348px);
  gap: 32px;
`

export const ColumnStyle = styled.div`
  display: grid;
  gap: 16px;
`

export const TitleStyle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.L.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.L.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.L.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
  margin-bottom: 16px;
`

export const CardRootStyle = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.neutral[4]};
  display: grid;
  gap: 16px;
`

export const CardRowTitleStyle = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 18px;
  gap: 16px;
`

export const CardRowStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardRowTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: -4px;
  left: -4px;
  right: -4px;
  margin-bottom: -4px;
`

export const TagItem = styled.div`
  padding: 4px;
`

export const CardTitleStyle = styled.h3`
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.L.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.L.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.L.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
`

export const CardPointsStyle = styled.span`
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
`

export const CardDateStyle = styled.div<StyledDateProps>`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  background-color: ${(props) => props.bgColor || 'rgba(148, 151, 154, 0.1)'};
  color: ${(props) => props.textColor || props.theme.palette.neutral[1]};
  svg {
    margin-right: 10px;
  }
`

export const CardButtonStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 6px;
  font-weight: 400;
  align-items: center;
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
`
