import React, { ReactElement, FunctionComponent } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { RootStyle } from './styles'
import { Typography } from '../../index'
import { SvgProps } from '../../../svg/StyledSvg'

interface SidebarItemProps {
  icon: FunctionComponent<SvgProps>
  path: string
  name: string
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({
  icon: Icon,
  path,
  name,
}): ReactElement => {
  const { pathname } = useLocation()
  const theme = useTheme()

  return (
    <Link to={path}>
      <RootStyle active={pathname === path}>
        <Icon color={pathname === path ? theme.palette.primary[4] : theme.palette.neutral[2]} />
        <Typography
          fontWeight={600}
          component="span"
          variant={{ desktop: 'body' }}
          size={{ desktop: 'M' }}
          color={pathname === path ? theme.palette.primary[4] : theme.palette.neutral[2]}
        >
          {name}
        </Typography>
      </RootStyle>
    </Link>
  )
}

export default SidebarItem
