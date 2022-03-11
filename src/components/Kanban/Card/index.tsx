import React, { FunctionComponent, ReactElement } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useTheme } from 'styled-components'
import moment from 'moment'
import { CardProps, DateProps, StyledDateProps } from '../types'
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
} from '../styles'
import { DotsSvg, ClockSvg, AttachSvg, CommentSvg, BranchSvg } from '../../../svg'
import { Avatar } from '../../index'

const Card: FunctionComponent<CardProps> = ({
  id,
  name,
  tags,
  position,
  dueDate,
  pointEstimate,
  assignee,
}): ReactElement => {
  const theme = useTheme()

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
            <DotsSvg />
          </CardRowTitleStyle>
          <CardRowStyle>
            <CardPointsStyle>
              {pointEstimate} Point{+pointEstimate > 1 && 's'}
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
