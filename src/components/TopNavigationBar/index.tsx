import React, { ReactElement, FunctionComponent, KeyboardEvent, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useKanban, useQueryParams } from '../../hooks'
import { RootStyle, SearchStyle, WrapSearchButton } from './styles'
import { BellSvg, SearchSvg } from '../../svg'
import UserAvatar from './UserAvatar'

const TopNavigationBar: FunctionComponent = (): ReactElement => {
  const { queryTask, setQueryTask } = useKanban()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const query = useQueryParams()

  useEffect(() => {
    if (pathname === '/app/myTask') {
      setQueryTask(query.get('queryTask') || '')
    }
  }, [pathname, setQueryTask, query])

  const manageSearch = (): void => {
    if (pathname !== '/app/myTask' && queryTask !== '') {
      navigate(`/app/myTask?queryTask=${queryTask}`, { replace: true })
    }
  }

  const manageSearchByKeyboard = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      manageSearch()
    }
  }

  return (
    <RootStyle>
      <WrapSearchButton onClick={manageSearch}>
        <SearchSvg />
      </WrapSearchButton>
      <SearchStyle
        onKeyUp={manageSearchByKeyboard}
        type="search"
        placeholder="Search"
        value={queryTask}
        onChange={(e) => {
          setQueryTask(e.target.value)
        }}
      />
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
