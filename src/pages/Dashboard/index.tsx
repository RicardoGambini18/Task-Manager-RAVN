import React, { ReactElement, FunctionComponent } from 'react'
import { RootStyle } from './styles'
import { Kanban } from '../../components'

const Dashboard: FunctionComponent = (): ReactElement => {
  return (
    <RootStyle>
      <Kanban />
    </RootStyle>
  )
}

export default Dashboard
