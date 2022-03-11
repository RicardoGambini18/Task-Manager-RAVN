import { gql } from '@apollo/client'

const getProfileQuery = gql`
  query {
    profile {
      id
      avatar
    }
  }
`

export default getProfileQuery
