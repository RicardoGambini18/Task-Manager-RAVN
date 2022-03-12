import React, { ReactElement, FunctionComponent, useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
  RootStyle,
  HeaderSectionStyle,
  MainSectionStyle,
  SidebarSectionStyle,
  HeaderTopBarStyle,
  AddButtonStyle,
} from './styles'
import { Sidebar, TopNavigationBar, Switch, Button, Modal, TaskForm } from '../../components'
import { PlusSvg } from '../../svg'

const DashboardLayout: FunctionComponent = (): ReactElement => {
  const [openModal, setOpenModal] = useState(false)

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
            <Button onClick={() => setOpenModal(true)} icon={PlusSvg} active />
          </AddButtonStyle>
          <Modal id="modalNavigationBar" open={openModal} onClose={() => setOpenModal(false)}>
            <TaskForm onCancel={() => setOpenModal(false)} />
          </Modal>
        </HeaderTopBarStyle>
      </HeaderSectionStyle>
      <MainSectionStyle>
        <Outlet />
      </MainSectionStyle>
    </RootStyle>
  )
}

export default DashboardLayout
