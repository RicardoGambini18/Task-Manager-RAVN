import React, { FunctionComponent, ReactElement } from 'react'
import { RootStyle } from './styles'

interface OnCloseFunc {
  (): void
}

interface ModalProps {
  open: boolean
  onClose: OnCloseFunc
  id: string
}

const Modal: FunctionComponent<ModalProps> = ({ open, onClose, children, id }): ReactElement => {
  return (
    <RootStyle
      open={open}
      id={id}
      onClick={(e) => {
        const target = e.target as Element
        if (target.id === id) {
          onClose()
        }
      }}
    >
      {children}
    </RootStyle>
  )
}

export default Modal
