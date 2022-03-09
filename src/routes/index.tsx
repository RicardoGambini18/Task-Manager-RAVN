import React, { ReactElement } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { Dashboard, MyTask, Error404 } from '../pages'

const Router = (): ReactElement | null => {
  return useRoutes([
    {
      path: 'app',
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'myTask',
          element: <MyTask />,
        },
      ],
    },
    { path: '/', element: <Navigate to="/app/dashboard" replace /> },
    {
      path: '*',
      children: [
        { path: '404', element: <Error404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ])
}

export default Router
