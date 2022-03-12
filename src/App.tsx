import React, { ReactElement, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import GlobalStyle from './theme/GlobalStyle'
import theme from './theme'
import { KanbanContext, KabanType } from './hooks/useKanban'
import { intialKanbanState } from './components/Kanban/helpers'
import { KanbanStateProps } from './components/Kanban/types'

function App(): ReactElement {
  const [kanbanColumnsState, setKanbanColumnsState] = useState<KanbanStateProps>(intialKanbanState)
  const kanbanContextValue = useMemo<KabanType>(
    () => ({ kanbanColumns: kanbanColumnsState, setKanbanColumns: setKanbanColumnsState }),
    [kanbanColumnsState, setKanbanColumnsState]
  )

  return (
    <KanbanContext.Provider value={kanbanContextValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </KanbanContext.Provider>
  )
}

export default App
