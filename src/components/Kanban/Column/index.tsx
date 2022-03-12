import React, { FunctionComponent, ReactElement } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Card from '../Card'
import { ColumnProps } from '../types'
import { ColumnStyle, TitleStyle } from '../styles'

const Column: FunctionComponent<ColumnProps> = ({ id, list, title }): ReactElement => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div>
          <TitleStyle>
            {title} ({list.length < 10 && '0'}
            {list.length})
          </TitleStyle>
          <ColumnStyle
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((task) => (
              <Card
                key={task.id}
                id={task.id}
                position={task.position}
                tags={task.tags}
                dueDate={task.dueDate}
                pointEstimate={task.pointEstimate}
                assignee={task.assignee}
                name={task.name}
                status={task.status}
              />
            ))}
            {provided.placeholder}
          </ColumnStyle>
        </div>
      )}
    </Droppable>
  )
}

export default Column
