import React from 'react'
import 'antd/dist/reset.css'
import { RouterProvider } from 'react-router'
import routerConfig from './router'
// const obj = {}
function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  )
}

export default App
