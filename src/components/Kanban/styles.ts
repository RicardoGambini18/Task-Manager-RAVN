import styled from 'styled-components'
import { StyledDateProps } from './types'

export const KanbanStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 348px);
  gap: 32px;
`

export const LoadingKanbanStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${(props) => props.theme.typography.android.body.XL.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.XL.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.XL.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
`

export const ColumnStyle = styled.div`
  display: grid;
  gap: 16px;
  min-height: 100%;
  grid-auto-rows: min-content;
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

interface WrapProps {
  modalOpened: boolean
}

export const WrapDotsButton = styled.div<WrapProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: ${(props) => (props.modalOpened ? 'initial' : 10)};
`

interface DropBoxProps {
  width: number
  open: boolean
}

export const StyledDropBox = styled.div<DropBoxProps>`
  position: absolute;
  top: calc(100% + 0px);
  display: ${(props) => (props.open ? 'grid' : 'none')};
  gap: 20px;
  cursor: default;
  right: 0;
  width: ${(props) => props.width}px;
  padding: 15px;
  background: ${(props) => props.theme.palette.neutral[3]};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.neutral[2]};
`

export const DropBoxItem = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  color: ${(props) => props.theme.palette.neutral[1]};
  svg {
    margin-right: 10px;
  }
`

export const ClickButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
