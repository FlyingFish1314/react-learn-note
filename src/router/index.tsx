import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/views/home'
import About from '@/views/about'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <About></About>
  }
])

export default router
