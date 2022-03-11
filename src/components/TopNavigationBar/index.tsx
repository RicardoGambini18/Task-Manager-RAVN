import React, { ReactElement, FunctionComponent } from 'react'
import { RootStyle, SearchStyle } from './styles'
import { Avatar } from '../index'
import { BellSvg, SearchSvg } from '../../svg'

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
        <Avatar size={40} />
      </div>
    </RootStyle>
  )
}

export default TopNavigationBar
