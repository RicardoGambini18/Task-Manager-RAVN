import { gql } from '@apollo/client'

const getUsersQuery = gql`
  query {
    users {
      id
      fullName
      avatar
    }
  }
`

export default getUsersQuery
