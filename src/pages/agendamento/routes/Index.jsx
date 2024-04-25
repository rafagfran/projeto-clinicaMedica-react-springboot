import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FormAgendamento from '../subpages/Formulario.jsx'
import MainAgendamento from '../Index.jsx'

const Index = () => {
  return (
    <Routes>
        <Route path="" element={<MainAgendamento />}/>
        <Route path="formulario" element={<FormAgendamento />}/>
    </Routes>
  )
}

export default Index