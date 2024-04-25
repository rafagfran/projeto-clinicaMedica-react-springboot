import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='app'>
        <Sidebar />
        <div className='hero'>
          <Outlet />
        </div>
       
    </div>
  )
}

export default App
