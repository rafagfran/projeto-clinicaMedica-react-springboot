import React from 'react'
import { Routes, Route } from 'react-router-dom'

import App from '../App.jsx'
import Home from '../pages/home/Index.jsx'
import RoutesAgendamento from '../pages/agendamento/routes/Index.jsx'
import RoutesInternacao from '../pages/internacao/routes/Index.jsx'
import Medico from '../pages/medicos/Index.jsx'
import Paciente from '../pages/pacientes/Index.jsx'

const index = () => {
  return (
    <Routes>
        <Route path="/"element={<App />}>
            <Route path="/" element={<Home />}/>
            <Route path="/agendamento/*" element={<RoutesAgendamento/>}/>
            <Route path="/internacao/*" element={<RoutesInternacao />}/>
            <Route path="/medico/*" element={<Medico/>}/>
            <Route path="/paciente/*" element={<Paciente />}/>
        </Route>
        
    </Routes>
  )
}

export default index