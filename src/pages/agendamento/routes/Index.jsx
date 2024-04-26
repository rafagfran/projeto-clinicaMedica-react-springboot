import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FormAgendamento from '../subpages/FormularioAgendamento.jsx'
import MainAgendamento from '../Index.jsx'

const Index = () => {
  return (
    <Routes>
        <Route path="formulario" element={<FormAgendamento />}/>
    </Routes>
  )
}

export default Index