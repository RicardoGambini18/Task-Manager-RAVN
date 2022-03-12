import styled from 'styled-components'

export const RootStyle = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.neutral[3]};
  position: relative;
  z-index: 1000;
  width: 100%;
  display: grid;
  gap: 24px;
`

export const TitleInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  font-weight: 600;
  background: none;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.XL.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.XL.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.XL.spacing}px;
  &:focus {
    outline: none;
  }
`

export const InputGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 123px auto auto auto;
  gap: 16px;
`

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    margin-left: 15px;
  }
`

interface StyledInputProps {
  selected: boolean
}

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.selected ? 'rgba(0,0,0,0)' : 'rgba(148, 151, 154, 0.1)')};
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  font-weight: ${(props) => (props.selected ? '400' : '600')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  svg,
  img,
  input {
    margin-right: 10px;
  }
  input,
  label {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

export const CheckboxStyle = styled.input`
  width: 18px;
  height: 18px;
  border: 3px solid ${(props) => props.theme.palette.neutral[1]};
  border-radius: 0;
  background: none;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 4px 16px;
`

interface DropBoxProps {
  width: number
  open: boolean
}

export const StyledDropBox = styled.div<DropBoxProps>`
  position: absolute;
  top: calc(100% + 8px);
  display: ${(props) => (props.open ? 'block' : 'none')};
  cursor: default;
  left: 0;
  width: ${(props) => props.width}px;
  padding: 8px 16px 15px;
  background: ${(props) => props.theme.palette.neutral[3]};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.palette.neutral[2]};
`

export const DropBoxTitle = styled.h4`
  color: ${(props) => props.theme.palette.neutral[2]};
  font-size: ${(props) => props.theme.typography.android.body.XL.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.XL.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.XL.spacing}px;
  font-weight: 600;
  margin-bottom: 10px;
`

interface SpacerProps {
  spacing: number
}

export const GridSpacer = styled.div<SpacerProps>`
  display: grid;
  width: 100%;
  gap: ${(props) => props.spacing}px;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.palette.neutral[1]};
  font-size: ${(props) => props.theme.typography.android.body.M.fontSize}px;
  line-height: ${(props) => props.theme.typography.android.body.M.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.android.body.M.spacing}px;
  font-weight: 400;
  cursor: pointer;
`
