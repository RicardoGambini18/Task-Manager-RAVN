import React, { FunctionComponent, ReactElement, useState, useRef, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useMutation } from '@apollo/client'
import { useTheme } from 'styled-components'
import moment from 'moment'
import { deleteTaskMutation } from '../../../graphql'
import { useOnOutsideClick, useKanban } from '../../../hooks'
import { CardProps, DateProps, StyledDateProps, ColumnProps } from '../types'
import {
  CardRootStyle,
  CardRowTitleStyle,
  CardTitleStyle,
  CardRowStyle,
  CardPointsStyle,
  CardDateStyle,
  CardRowTags,
  TagItem,
  CardButtonStyle,
  WrapDotsButton,
  StyledDropBox,
  DropBoxItem,
  ClickButton,
} from '../styles'
import {
  DotsSvg,
  ClockSvg,
  AttachSvg,
  CommentSvg,
  BranchSvg,
  TrashSvg,
  EditSvg,
} from '../../../svg'
import { Avatar, Modal, TaskForm } from '../../index'

const Card: FunctionComponent<CardProps> = ({
  id,
  name,
  tags,
  position,
  dueDate,
  pointEstimate,
  assignee,
  status,
}): ReactElement => {
  const [openDropBox, setOpenDropBox] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const theme = useTheme()
  const DropDownRef = useRef(null)
  const [deleteTask, { data, loading }] = useMutation(deleteTaskMutation)
  const { setKanbanColumns } = useKanban()

  useOnOutsideClick({
    ref: DropDownRef,
    onOutsideClick: () => {
      setOpenDropBox(false)
    },
  })

  useEffect(() => {
    if (!loading && data) {
      setKanbanColumns((prev) => {
        const getColumn = (): ColumnProps => {
          switch (data.deleteTask.status) {
            case 'BACKLOG':
              return prev.BACKLOG
            case 'TODO':
              return prev.TODO
            case 'IN_PROGRESS':
              return prev.IN_PROGRESS
            case 'DONE':
              return prev.DONE
            case 'CANCELLED':
              return prev.CANCELLED
            default:
              return prev.BACKLOG
          }
        }
        const col = getColumn()
        const removedCol = col.list.filter((item) => item.id !== data.deleteTask.id)
        const orderedCol = removedCol.map((item) => {
          if (item.position > data.deleteTask.position) {
            return {
              ...item,
              position: item.position - 1,
            }
          }
          return item
        })
        return {
          ...prev,
          [data.deleteTask.status]: {
            ...col,
            list: orderedCol,
          },
        }
      })
    }
  }, [data, loading, setKanbanColumns])

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

  const getTagsColor = (tagName: string): StyledDateProps => {
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

  const getDate = (date: string): DateProps => {
    const daysDifference = moment().diff(moment(date), 'days')
    if (daysDifference >= -2) {
      const currentDay = +moment().format('D')
      const day = +moment(date).format('D')
      if (currentDay === day) {
        return {
          date: 'TODAY',
          textColor: theme.palette.tertiary[4],
          bgColor: 'rgba(229, 180, 84, 0.1)',
        }
      }
      if (currentDay === day - 1) {
        return {
          date: 'TOMORROW',
          textColor: theme.palette.tertiary[4],
          bgColor: 'rgba(229, 180, 84, 0.1)',
        }
      }
      if (currentDay === day + 1) {
        return {
          date: 'YESTERDAY',
          textColor: theme.palette.primary[4],
          bgColor: 'rgba(218, 88, 75, 0.1)',
        }
      }
      if (daysDifference < 0) {
        return {
          date: moment(date).format('DD MMMM, YYYY').toUpperCase(),
          textColor: theme.palette.tertiary[4],
          bgColor: 'rgba(229, 180, 84, 0.1)',
        }
      }
      return {
        date: moment(date).format('DD MMMM, YYYY').toUpperCase(),
        textColor: theme.palette.primary[4],
        bgColor: 'rgba(218, 88, 75, 0.1)',
      }
    }
    return {
      date: moment(date).format('DD MMMM, YYYY').toUpperCase(),
      textColor: theme.palette.neutral[1],
      bgColor: 'rgba(148, 151, 154, 0.1)',
    }
  }

  return (
    <Draggable draggableId={id} index={position}>
      {(provided) => (
        <CardRootStyle
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          <CardRowTitleStyle>
            <CardTitleStyle>{name}</CardTitleStyle>
            <WrapDotsButton modalOpened={openModal} ref={DropDownRef}>
              <ClickButton onClick={() => setOpenDropBox((prev) => !prev)}>
                <DotsSvg />
              </ClickButton>
              <StyledDropBox open={openDropBox} width={138}>
                <DropBoxItem
                  onClick={() => {
                    setOpenModal(true)
                    setOpenDropBox(false)
                  }}
                >
                  <EditSvg />
                  Edit
                </DropBoxItem>
                <DropBoxItem
                  onClick={() => {
                    deleteTask({
                      variables: {
                        id,
                      },
                    })
                    setOpenDropBox(false)
                  }}
                >
                  <TrashSvg />
                  Delete
                </DropBoxItem>
              </StyledDropBox>
              <Modal id={id} open={openModal} onClose={() => setOpenModal(false)}>
                <TaskForm
                  initialValues={{
                    id,
                    name,
                    tags,
                    pointEstimate,
                    dueDate,
                    assigneeId: assignee.id,
                    status,
                    position,
                  }}
                  onCancel={() => setOpenModal(false)}
                />
              </Modal>
            </WrapDotsButton>
          </CardRowTitleStyle>
          <CardRowStyle>
            <CardPointsStyle>
              {getPointEstimate(pointEstimate)} Point{pointEstimate !== 'ONE' && 's'}
            </CardPointsStyle>
            <CardDateStyle
              textColor={getDate(dueDate).textColor}
              bgColor={getDate(dueDate).bgColor}
            >
              <ClockSvg color={getDate(dueDate).textColor} width={20.51} height={19.25} />
              {getDate(dueDate).date}
            </CardDateStyle>
          </CardRowStyle>
          <CardRowTags>
            {tags.map((tag) => (
              <TagItem key={tag}>
                <CardDateStyle
                  textColor={getTagsColor(tag).textColor}
                  bgColor={getTagsColor(tag).bgColor}
                >
                  {tag}
                </CardDateStyle>
              </TagItem>
            ))}
          </CardRowTags>
          <CardRowStyle>
            <Avatar size={32} src={assignee.avatar} />
            <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(3, auto)' }}>
              <CardButtonStyle>
                <AttachSvg />
              </CardButtonStyle>
              <CardButtonStyle>
                5<BranchSvg />
              </CardButtonStyle>
              <CardButtonStyle>
                3<CommentSvg />
              </CardButtonStyle>
            </div>
          </CardRowStyle>
        </CardRootStyle>
      )}
    </Draggable>
  )
}

export default Card
