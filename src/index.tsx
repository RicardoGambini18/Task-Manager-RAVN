import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      // eslint-disable-next-line max-len
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiMGEyN2JlNDktZTAxNC00OGEzLTg2NGUtZGUyY2Y1ZGQ1MmI2IiwiZnVsbE5hbWUiOiJSaWNhcmRvIEplc8O6cyBHYW1iaW5pIEFicmlsIiwiZW1haWwiOiJyaWNhcmRvLmdhbWJpbmkxOEBvdXRsb29rLmNvbSIsImlhdCI6MTY0Njc1MzEyOH0.lR1UaYr86MZ8Ouy3ofCQZ0WfZTzLhZya9-i_N0QSJW0',
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
