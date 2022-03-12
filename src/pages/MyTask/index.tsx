import React, { ReactElement, FunctionComponent, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useTheme } from 'styled-components'
import moment from 'moment'
import {
  RootStyle,
  TableTitle,
  SimpleCell,
  Table,
  TableRow,
  TableHeader,
  NameCell,
  TagStyle,
  TableBody,
  TableHead,
  WrapSwitchIcon,
  NotFound,
} from './styles'
import { ArrowSvg } from '../../svg'
import { Avatar } from '../../components'
import { useKanban } from '../../hooks'
import { getTasksQuery } from '../../graphql'
import { parseColumns } from '../../components/Kanban/helpers'
import { LoadingKanbanStyle } from '../../components/Kanban/styles'
import { ColumnProps } from '../../components/Kanban/types'

interface DateInfoProps {
  color: string
  day: string
}

interface StyledTagProps {
  textColor: string
  bgColor: string
}

interface ListsStateProps {
  BACKLOG: boolean
  CANCELLED: boolean
  DONE: boolean
  IN_PROGRESS: boolean
  TODO: boolean
}

const MyTask: FunctionComponent = (): ReactElement => {
  const { loading, data } = useQuery(getTasksQuery)
  const { kanbanColumns, setKanbanColumns, queryTask } = useKanban()
  const theme = useTheme()
  const [listsOpen, setListsOpen] = useState<ListsStateProps>({
    BACKLOG: true,
    CANCELLED: true,
    DONE: true,
    IN_PROGRESS: true,
    TODO: true,
  })

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
      }
    }
  }, [loading, data, kanbanColumns, setKanbanColumns])

  const getDateInfo = (date: string): DateInfoProps => {
    const daysDifference = moment().diff(moment(date), 'days')
    if (daysDifference >= -2) {
      const currentDay = +moment().format('D')
      const day = +moment(date).format('D')
      if (currentDay === day) {
        return {
          color: theme.palette.tertiary[4],
          day: 'Today',
        }
      }
      if (currentDay === day - 1) {
        return {
          color: theme.palette.tertiary[4],
          day: 'Tomorrow',
        }
      }
      if (currentDay === day + 1) {
        return {
          day: 'Yesterday',
          color: theme.palette.primary[4],
        }
      }
      if (daysDifference < 0) {
        return {
          day: moment(date).format('DD MMMM, YYYY'),
          color: theme.palette.tertiary[4],
        }
      }
      return {
        day: moment(date).format('DD MMMM, YYYY'),
        color: theme.palette.primary[4],
      }
    }
    return {
      day: moment(date).format('DD MMMM, YYYY'),
      color: theme.palette.secondary[4],
    }
  }

  const getTagsColor = (tagName: string): StyledTagProps => {
    switch (tagName) {
      case 'ANDROID':
        return {
          textColor: theme.palette.secondary[4],
          bgColor: 'rgba(112, 178, 82, 0.1)',
        }
      case 'IOS':
        return {
          textColor: theme.palette.tertiary[4],
          bgColor: 'rgba(229, 180, 84, 0.1)',
        }
      case 'NODE_JS':
        return {
          textColor: theme.palette.secondary[4],
          bgColor: 'rgba(112, 178, 82, 0.1)',
        }
      case 'RAILS':
        return {
          textColor: theme.palette.primary[4],
          bgColor: 'rgba(218, 88, 75, 0.1)',
        }
      case 'REACT':
        return {
          textColor: theme.palette.neutral[1],
          bgColor: 'rgba(148, 151, 154, 0.1)',
        }
      default:
        return {
          textColor: theme.palette.neutral[1],
          bgColor: 'rgba(148, 151, 154, 0.1)',
        }
    }
  }

  const getPointEstimate = (stringPoints: string): number => {
    switch (stringPoints) {
      case 'EIGHT':
        return 8
      case 'FOUR':
        return 4
      case 'ONE':
        return 1
      case 'TWO':
        return 2
      case 'ZERO':
        return 0
      default:
        return 0
    }
  }

  if (loading) {
    return <LoadingKanbanStyle>Loading...</LoadingKanbanStyle>
  }

  return (
    data.tasks && (
      <RootStyle>
        <TableTitle>
          <TableHead>
            <TableRow>
              <SimpleCell># Task Name</SimpleCell>
              <SimpleCell>Task Tags</SimpleCell>
              <SimpleCell>Estimate</SimpleCell>
              <SimpleCell>Task Assign Name</SimpleCell>
              <SimpleCell>Due Date</SimpleCell>
            </TableRow>
          </TableHead>
        </TableTitle>
        {((): ReactElement | boolean => {
          const fullTasks = [
            ...kanbanColumns.BACKLOG.list,
            ...kanbanColumns.TODO.list,
            ...kanbanColumns.IN_PROGRESS.list,
            ...kanbanColumns.DONE.list,
            ...kanbanColumns.CANCELLED.list,
          ]
          const filterFullTasks = fullTasks.filter((task) => {
            const parseName = task.name.toUpperCase()
            const parseQuery = queryTask.toUpperCase()
            return parseName.indexOf(parseQuery) !== -1
          })
          return (
            Boolean(!filterFullTasks.length) && (
              <NotFound>There are no matching tasks for the word: &quot;{queryTask}&quot;</NotFound>
            )
          )
        })()}
        {Object.values(kanbanColumns).map((col: ColumnProps) => {
          const filterColumn = col.list.filter((task) => {
            const parseName = task.name.toUpperCase()
            const parseQuery = queryTask.toUpperCase()
            return parseName.indexOf(parseQuery) !== -1
          })
          return (
            Boolean(filterColumn.length) && (
              <Table key={col.id}>
                <TableHead>
                  <TableRow>
                    <TableHeader
                      onClick={() =>
                        setListsOpen((prev) => ({
                          ...prev,
                          [col.id]: !prev[col.id],
                        }))
                      }
                    >
                      <WrapSwitchIcon open={listsOpen[col.id]}>
                        <ArrowSvg />
                      </WrapSwitchIcon>
                      {col.title}{' '}
                      <span>
                        ({col.list.length < 10 && 0}
                        {col.list.length})
                      </span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody open={listsOpen[col.id]} items={col.list.length}>
                  {filterColumn.map((task) => {
                    const { day, color } = getDateInfo(task.dueDate)
                    const firstTagData = task.tags.length && getTagsColor(task.tags[0])

                    return (
                      <TableRow key={task.id}>
                        <NameCell lineColor={color}>
                          {task.position < 10 && 0}
                          {task.position} {task.name}
                        </NameCell>
                        <SimpleCell>
                          {firstTagData && (
                            <TagStyle
                              textColor={firstTagData.textColor}
                              bgColor={firstTagData.bgColor}
                            >
                              {task.tags[0]}
                            </TagStyle>
                          )}
                          {task.tags.length > 1 && <TagStyle>+{task.tags.length - 1}</TagStyle>}
                        </SimpleCell>
                        <SimpleCell>{getPointEstimate(task.pointEstimate)} Points</SimpleCell>
                        <SimpleCell>
                          <Avatar src={task.assignee.avatar} />
                          {task.assignee.fullName.split(' ')[0]}{' '}
                          {task.assignee.fullName.split(' ')[1]}
                        </SimpleCell>
                        <SimpleCell>{day}</SimpleCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            )
          )
        })}
      </RootStyle>
    )
  )
}

export default MyTask
