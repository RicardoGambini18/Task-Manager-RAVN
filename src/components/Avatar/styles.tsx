import styled from 'styled-components'

export const RootStyle = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  object-fit: cover;
`

interface LoadingProps {
  width?: number
  height?: number
}

export const LoadingStyle = styled.div<LoadingProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
`
