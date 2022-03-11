import React, { ReactElement } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { Dashboard, MyTask, Error404 } from '../pages'
import { DashboardLayout } from '../layouts'
import paths from './paths'

const Router = (): ReactElement | null => {
  return useRoutes([
    {
      path: paths.APP.BASE,
      element: <DashboardLayout />,
      children: [
        {
          path: paths.APP.DASHBOARD.BASE,
          element: <Dashboard />,
        },
        {
          path: paths.APP.MYTASK.BASE,
          element: <MyTask />,
        },
      ],
    },
    {
      path: paths.ERROR.BASE,
      children: [
        {
          path: paths.ERROR[404].BASE,
          element: <Error404 />,
        },
      ],
    },
    { path: '/', element: <Navigate to={paths.APP.DASHBOARD.ROUTE} replace /> },
    {
      path: '*',
      children: [{ path: '*', element: <Navigate to={paths.ERROR[404].ROUTE} replace /> }],
    },
  ])
}

export default Router
