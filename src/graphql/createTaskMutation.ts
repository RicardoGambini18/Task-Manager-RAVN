import { gql } from '@apollo/client'

const createTaskMutation = gql`
  mutation createTaskMutation(
    $assigneeId: String
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    createTask(
      input: {
        assigneeId: $assigneeId
        dueDate: $dueDate
        name: $name
        pointEstimate: $pointEstimate
        status: $status
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

export default createTaskMutation
