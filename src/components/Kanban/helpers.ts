import { KanbanStateProps, TaskProps } from './types'

// initial State
export const intialKanbanState: KanbanStateProps = {
  BACKLOG: {
    id: 'BACKLOG',
    title: 'Backlog',
    list: [],
  },
  TODO: {
    id: 'TODO',
    title: 'To Do',
    list: [],
  },
  IN_PROGRESS: {
    id: 'IN_PROGRESS',
    title: 'In Progress',
    list: [],
  },
  DONE: {
    id: 'DONE',
    title: 'Done',
    list: [],
  },
  CANCELLED: {
    id: 'CANCELLED',
    title: 'Cancelled',
    list: [],
  },
}

// Order Functions
export const sortTasks = (a: TaskProps, b: TaskProps): number => {
  return a.position - b.position
}

export const removeCard = (list: TaskProps[], position: number): TaskProps[] => {
  const newList = list.filter((task) => task.position !== position)
  const newListOrdered = newList.map((task) => {
    if (task.position > position) {
      return {
        ...task,
        position: task.position - 1,
      }
    }
    return task
  })
  return newListOrdered.sort(sortTasks)
}

export const insertCard = (
  list: TaskProps[],
  task: TaskProps,
  position: number,
  columnId: string
): TaskProps[] => {
  const newTask = { ...task, status: columnId, position }
  const copyList = [...list]
  const newList = copyList.map((taskItem) => {
    if (taskItem.position >= position) {
      return {
        ...taskItem,
        position: taskItem.position + 1,
      }
    }
    return taskItem
  })
  return [...newList, newTask].sort(sortTasks)
}

// Parse Columns
export const parseColumns = (tasksList: TaskProps[]): KanbanStateProps => {
  return {
    BACKLOG: {
      id: 'BACKLOG',
      title: 'Backlog',
      list: tasksList.filter((task) => task.status === 'BACKLOG').sort(sortTasks),
    },
    TODO: {
      id: 'TODO',
      title: 'To Do',
      list: tasksList.filter((task) => task.status === 'TODO').sort(sortTasks),
    },
    IN_PROGRESS: {
      id: 'IN_PROGRESS',
      title: 'In Progress',
      list: tasksList.filter((task) => task.status === 'IN_PROGRESS').sort(sortTasks),
    },
    DONE: {
      id: 'DONE',
      title: 'Done',
      list: tasksList.filter((task) => task.status === 'DONE').sort(sortTasks),
    },
    CANCELLED: {
      id: 'CANCELLED',
      title: 'Cancelled',
      list: tasksList.filter((task) => task.status === 'CANCELLED').sort(sortTasks),
    },
  }
}
