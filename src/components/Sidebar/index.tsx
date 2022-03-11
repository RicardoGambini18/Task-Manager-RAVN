import React, { FunctionComponent, ReactElement } from 'react'
import { RootStyle, LogoContainer } from './styles'
import SidebarItem from './SidebarItem'
import { LogoSvg, DashboardSvg, BarsSvg } from '../../svg'
import paths from '../../routes/paths'

const Sidebar: FunctionComponent = (): ReactElement => {
  return (
    <RootStyle>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>
      <SidebarItem icon={DashboardSvg} name="DASHBOARD" path={paths.APP.DASHBOARD.ROUTE} />
      <SidebarItem icon={BarsSvg} name="MY TASK" path={paths.APP.MYTASK.ROUTE} />
    </RootStyle>
  )
}

export default Sidebar
