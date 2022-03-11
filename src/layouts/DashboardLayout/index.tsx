import React, { ReactElement, FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import {
  RootStyle,
  HeaderSectionStyle,
  MainSectionStyle,
  SidebarSectionStyle,
  HeaderTopBarStyle,
  AddButtonStyle,
} from './styles'
import { Sidebar, TopNavigationBar, Switch, Button } from '../../components'
import { PlusSvg } from '../../svg'

const DashboardLayout: FunctionComponent = (): ReactElement => {
  return (
    <RootStyle>
      <SidebarSectionStyle>
        <Sidebar />
      </SidebarSectionStyle>
      <HeaderSectionStyle>
        <TopNavigationBar />
        <HeaderTopBarStyle>
          <Switch />
          <AddButtonStyle>
            <Button icon={PlusSvg} active />
          </AddButtonStyle>
        </HeaderTopBarStyle>
      </HeaderSectionStyle>
      <MainSectionStyle>
        <Outlet />
      </MainSectionStyle>
    </RootStyle>
  )
}

export default DashboardLayout
