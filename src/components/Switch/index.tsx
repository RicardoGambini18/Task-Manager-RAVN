import React, { ReactElement, FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../hooks'
import { RootStyle, TabStyle, DesktopRootStyle } from './styles'
import { Button } from '../index'
import { DashboardSvg, BarsSvg } from '../../svg'
import paths from '../../routes/paths'

const Switch: FunctionComponent = (): ReactElement => {
  const { pathname } = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`)

  return isMobile ? (
    <RootStyle>
      <Link to={paths.APP.DASHBOARD.ROUTE}>
        <TabStyle active={pathname === paths.APP.DASHBOARD.ROUTE} position="left">
          Dashboard
        </TabStyle>
      </Link>
      <Link to={paths.APP.MYTASK.ROUTE}>
        <TabStyle active={pathname === paths.APP.MYTASK.ROUTE} position="right">
          Task
        </TabStyle>
      </Link>
    </RootStyle>
  ) : (
    <DesktopRootStyle>
      <Link to={paths.APP.MYTASK.ROUTE}>
        <Button icon={BarsSvg} variant="outlined" active={pathname === paths.APP.MYTASK.ROUTE} />
      </Link>
      <Link to={paths.APP.DASHBOARD.ROUTE}>
        <Button
          icon={DashboardSvg}
          variant="outlined"
          active={pathname === paths.APP.DASHBOARD.ROUTE}
        />
      </Link>
    </DesktopRootStyle>
  )
}

export default Switch
