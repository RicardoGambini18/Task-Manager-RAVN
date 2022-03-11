import React, { ReactElement, FunctionComponent } from 'react'
import { RootStyle, SearchStyle } from './styles'
import { BellSvg, SearchSvg } from '../../svg'
import UserAvatar from './UserAvatar'

const TopNavigationBar: FunctionComponent = (): ReactElement => {
  return (
    <RootStyle>
      <div style={{ gridArea: 'iconSearch' }}>
        <SearchSvg />
      </div>
      <SearchStyle type="search" placeholder="Search" />
      <div style={{ gridArea: 'iconBell' }}>
        <BellSvg />
      </div>
      <div style={{ gridArea: 'avatar' }}>
        <UserAvatar />
      </div>
    </RootStyle>
  )
}

export default TopNavigationBar
