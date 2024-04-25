import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='app'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default App
