import React, { FunctionComponent, ReactElement, useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Column from './Column'
import { KanbanStateProps } from './types'
import { tasks } from '../../temp'
import { KanbanStyle } from './styles'

const Kanban: FunctionComponent = (): ReactElement => {
  const [columns, setColumns] = useState<KanbanStateProps>({
    backlog: {
      id: 'backlog',
      title: 'Backlog',
      list: tasks.filter((task) => task.status === 'BACKLOG'),
    },
    to_do: {
      id: 'to_do',
      title: 'To Do',
      list: tasks.filter((task) => task.status === 'TODO'),
    },
    in_progress: {
      id: 'in_progress',
      title: 'In Progress',
      list: tasks.filter((task) => task.status === 'IN_PROGRESS'),
    },
    done: {
      id: 'done',
      title: 'Done',
      list: tasks.filter((task) => task.status === 'DONE'),
    },
    cancelled: {
      id: 'cancelled',
      title: 'Cancelled',
      list: tasks.filter((task) => task.status === 'CANCELLED'),
    },
  })

  const onDragEnd = ({ source, destination }: DropResult): void => {
    console.log('asd')
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <KanbanStyle>
        {Object.values(columns).map((col) => (
          <Column key={col.id} id={col.id} title={col.title} list={col.list} />
        ))}
      </KanbanStyle>
    </DragDropContext>
  )
}

export default Kanban
