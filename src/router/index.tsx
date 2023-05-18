import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import ManageLayout from '@/layouts/ManageLayout'
import QuestionLayout from '@/layouts/QuestionLayout'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import NotFound from '@/pages/notFound/NotFound'
import List from '@/pages/manage/list/List'
import Trash from '@/pages/manage/trash/Trash'
import Star from '@/pages/manage/start/Star'
import Edit from '@/pages/question/edit'
import Stat from '@/pages/question/stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'manage',
        element: <ManageLayout></ManageLayout>,
        children: [
          {
            path: 'list',
            element: <List></List>
          },
          {
            path: 'star',
            element: <Star></Star>
          },
          {
            path: 'trash',
            element: <Trash></Trash>
          }
        ]
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout></QuestionLayout>,
    children: [
      {
        path: 'edit',
        element: <Edit></Edit>
      },
      {
        path: 'stat',
        element: <Stat></Stat>
      }
    ]
  }
])

export default router
