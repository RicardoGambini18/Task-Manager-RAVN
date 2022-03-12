import { gql } from '@apollo/client'

const updateCompleteTaskMutation = gql`
  mutation updateCompleteTaskMutation(
    $assigneeId: String
    $dueDate: DateTime!
    $name: String!
    $id: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $position: Float
    $tags: [TaskTag!]!
  ) {
    updateTask(
      input: {
        assigneeId: $assigneeId
        dueDate: $dueDate
        name: $name
        pointEstimate: $pointEstimate
        status: $status
        id: $id
        position: $position
        tags: $tags
      }
    ) {
      id
      name
      dueDate
      pointEstimate
      position
      status
      tags
      assignee {
        id
        avatar
        fullName
      }
    }
  }
`

export default updateCompleteTaskMutation
