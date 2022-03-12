import React, { ReactElement, FunctionComponent } from 'react'
import faker from '@faker-js/faker'
import { RootStyle, LoadingStyle } from './styles'

type AvatarProps = {
  src?: string
  size?: number
  loading?: boolean
}

const Avatar: FunctionComponent<AvatarProps> = ({ src, size, loading, ...props }): ReactElement => {
  if (loading) {
    return <LoadingStyle width={size} height={size} />
  }
  /* eslint-disable react/jsx-props-no-spreading */
  return <RootStyle src={src || faker.image.avatar()} width={size} height={size} {...props} />
}

Avatar.defaultProps = {
  src: '',
  size: 32,
  loading: false,
}

export default React.memo(Avatar)
