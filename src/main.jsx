import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Login from './pages/login/Index.jsx'
import Logged from './routes/index.jsx'

import PrivateRoute from './routes/privateRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<PrivateRoute><Logged /></PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
