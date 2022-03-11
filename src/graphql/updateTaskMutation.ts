import { gql } from '@apollo/client'

const updateTaskMutation = gql`
  mutation updateTaskMutation($id: String!, $position: Float!, $status: Status!) {
    updateTask(input: { id: $id, position: $position, status: $status }) {
      id
      position
      status
    }
  }
`

export default updateTaskMutation
