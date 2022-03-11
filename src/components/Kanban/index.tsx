import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useQuery, useMutation } from '@apollo/client'
import { getTasksQuery, updateTaskMutation } from '../../graphql'
import Column from './Column'
import { KanbanStateProps, ColumnProps } from './types'
import { KanbanStyle, LoadingKanbanStyle } from './styles'
import { intialKanbanState, removeCard, insertCard, parseColumns, sortTasks } from './helpers'

const Kanban: FunctionComponent = (): ReactElement => {
  const { loading, data } = useQuery(getTasksQuery)
  const [updateTask] = useMutation(updateTaskMutation)
  const [kanbanColumns, setKanbanColumns] = useState<KanbanStateProps>(intialKanbanState)

  useEffect(() => {
    if (!loading && data.tasks) {
      const { BACKLOG, TODO, IN_PROGRESS, CANCELLED, DONE } = kanbanColumns
      if (
        !(
          BACKLOG.list.length ||
          TODO.list.length ||
          IN_PROGRESS.list.length ||
          CANCELLED.list.length ||
          DONE.list.length
        )
      ) {
        setKanbanColumns(parseColumns(data.tasks))
      } else {
        // Comparar que los objetas no sean iguales para colocarlo en el estado
      }
    }
  }, [loading, data, kanbanColumns])

  const getColumn = (columnId: string): ColumnProps => {
    switch (columnId) {
      case 'BACKLOG':
        return kanbanColumns.BACKLOG
      case 'TODO':
        return kanbanColumns.TODO
      case 'IN_PROGRESS':
        return kanbanColumns.IN_PROGRESS
      case 'DONE':
        return kanbanColumns.DONE
      case 'CANCELLED':
        return kanbanColumns.CANCELLED
      default:
        return kanbanColumns.BACKLOG
    }
  }

  const onDragEnd = ({ source, destination }: DropResult): void => {
    // Checking if the detination is valid
    if (destination === undefined || destination === null) return
    // Checking if the card was moved
    if (source.droppableId === destination.droppableId && destination.index === source.index) return

    // Start and end column
    const columnStart = getColumn(source.droppableId)
    const columnEnd = getColumn(destination.droppableId)

    // data task
    const taskToMove = columnStart.list.filter((task) => task.position === source.index)[0]

    // Updating the new task in the GraphQL API
    updateTask({
      variables: {
        id: taskToMove.id,
        position: destination.index,
        status: destination.droppableId,
      },
    })

    // Updating the tasks locally
    // Checking if the card wes moved in the same column
    if (columnStart.id === columnEnd.id) {
      // Same Column
      // Creating the new list without the card
      const removedList = removeCard(columnStart.list, taskToMove.position)
      // Adding the card in the new position
      const newStartList = insertCard(
        removedList,
        taskToMove,
        destination.index,
        destination.droppableId
      )
      // Creating new column
      const newCol: ColumnProps = {
        id: columnEnd.id,
        title: columnEnd.title,
        list: newStartList.sort(sortTasks),
      }
      // Setting new state
      setKanbanColumns((prev) => {
        return {
          ...prev,
          [newCol.id]: newCol,
        }
      })
    } else {
      // Diferent columns
      // Removing the card from the start column
      const newStartList = removeCard(columnStart.list, taskToMove.position)
      // Creating the new start column
      const newStartColumn = {
        id: columnStart.id,
        title: columnStart.title,
        list: newStartList.sort(sortTasks),
      }

      // Adding the card to the end column
      const newEndList = insertCard(columnEnd.list, taskToMove, destination.index, columnEnd.id)
      // Creating the new end column
      const newEndColumn = {
        id: columnEnd.id,
        title: columnEnd.title,
        list: newEndList.sort(sortTasks),
      }

      // Setting the new state
      setKanbanColumns((prev) => {
        return {
          ...prev,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        }
      })
    }
  }

  if (loading) {
    return <LoadingKanbanStyle>Loading...</LoadingKanbanStyle>
  }

  return (
    data.tasks && (
      <DragDropContext onDragEnd={onDragEnd}>
        <KanbanStyle>
          {Object.values(kanbanColumns).map((col) => (
            <Column key={col.id} id={col.id} title={col.title} list={col.list} />
          ))}
        </KanbanStyle>
      </DragDropContext>
    )
  )
}

export default Kanban
