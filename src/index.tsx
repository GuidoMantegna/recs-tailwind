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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Home />,
      },
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
    <RouterProvider router={router} />
  </React.StrictMode>
)
