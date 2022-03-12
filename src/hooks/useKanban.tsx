import React, { createContext, useContext } from 'react'
import { KanbanStateProps } from '../components/Kanban/types'
import { intialKanbanState } from '../components/Kanban/helpers'

export type KabanType = {
  kanbanColumns: KanbanStateProps
  setKanbanColumns: React.Dispatch<React.SetStateAction<KanbanStateProps>>
  queryTask: string
  setQueryTask: React.Dispatch<React.SetStateAction<string>>
}

export const KanbanContext = createContext<KabanType>({
  kanbanColumns: intialKanbanState,
  setKanbanColumns: () => {
    // empty function
  },
  queryTask: '',
  setQueryTask: () => {
    // emptu function
  },
})

const useKanban = (): KabanType => useContext(KanbanContext)

export default useKanban
