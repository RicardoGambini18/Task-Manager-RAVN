import { gql } from '@apollo/client'

const getTasksQuery = gql`
  query {
    tasks(input: {}) {
      id
      dueDate
      name
      pointEstimate
      position
      status
      tags
      assignee {
        id
        fullName
        avatar
      }
    }
  }
`

export default getTasksQuery
