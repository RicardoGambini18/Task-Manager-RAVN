export interface TaskProps {
  id: string
  dueDate: string
  name: string
  pointEstimate: string
  position: number
  status: string
  tags: string[]
  assignee: {
    id: string
    fullName: string
    avatar: string
  }
}

export interface CardProps {
  id: string
  name: string
  tags: string[]
  position: number
  dueDate: string
  pointEstimate: string
  status: string
  assignee: {
    id: string
    avatar: string
  }
}

export interface ColumnProps {
  id: keyof KanbanStateProps
  title: string
  list: TaskProps[]
}

export interface KanbanStateProps {
  BACKLOG: ColumnProps
  CANCELLED: ColumnProps
  DONE: ColumnProps
  IN_PROGRESS: ColumnProps
  TODO: ColumnProps
}

export interface DateProps {
  textColor: string
  bgColor: string
  date: string
}

export interface StyledDateProps {
  textColor?: string
  bgColor?: string
}
