import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import 'styles.css'
import App from 'components/App'
import Layout from 'routes/Layout'
import React from 'react'
import Landing from 'routes/Landing'
import ErrorPage from 'errorPage'
import Login from 'routes/Login'
import Home from 'routes/Home'
import Request from 'routes/Request'
import MyRequest from 'routes/MyRequests'
import Profile from 'routes/Profile'
import Favs from 'routes/Favs'
import { Provider } from 'context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'requests/:id',
        element: <Request />,
      },
      {
        path: 'requests',
        element: <MyRequest />,
      },
      {
        path: 'replies',
        element: <Favs />,
      },
      {
        path: 'favs',
        element: <Favs />,
      }
    ],
  },
  {
    path: '/home',
    element: <Landing />,
  }
])

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
