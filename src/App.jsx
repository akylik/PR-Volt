import React from 'react'
import { ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'
import './normalize.css'
import './app.scss'

function App() {
  return (
      <ConfigProvider
      theme={{}}
      >
        <div className="app">
          <Outlet />
        </div>
      </ConfigProvider>
  )
}

export default App
