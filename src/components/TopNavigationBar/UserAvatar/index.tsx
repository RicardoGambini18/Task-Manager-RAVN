import React, { FunctionComponent, ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { getProfileQuery } from '../../../graphql'
import { Avatar } from '../../index'

const UserAvatar: FunctionComponent = (): ReactElement => {
  const { loading, error, data } = useQuery(getProfileQuery)

  if (error) {
    return <Avatar size={40} loading />
  }

  return (
    <div>
      <Avatar size={40} loading={loading} src={data?.profile && data.profile.avatar} />
    </div>
  )
}

export default UserAvatar
