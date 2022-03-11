import React, { ReactElement, FunctionComponent } from 'react'
import faker from '@faker-js/faker'
import { RootStyle } from './styles'

type AvatarProps = {
  src?: string
  size?: number
}

const Avatar: FunctionComponent<AvatarProps> = ({ src, size, ...props }): ReactElement => {
  /* eslint-disable react/jsx-props-no-spreading */
  return <RootStyle src={src || faker.image.avatar()} width={size} height={size} {...props} />
}

Avatar.defaultProps = {
  src: '',
  size: 32,
}

export default Avatar
