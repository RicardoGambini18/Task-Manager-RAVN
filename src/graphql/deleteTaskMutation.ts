import { gql } from '@apollo/client'

const deleteTaskMutation = gql`
  mutation deleteTaskMutation($id: String!) {
    deleteTask(input: { id: $id }) {
      id
      status
      position
    }
  }
`

export default deleteTaskMutation
