import React from 'react'
import { Routes, Route } from 'react-router-dom'

import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Agendamento from '../pages/Agendamento.jsx'
import Internacao from '../pages/Internacao.jsx'
import Medico from '../pages/Medicos.jsx'
import Paciente from '../pages/Pacientes.jsx'

const index = () => {
  return (
    <Routes>
        <Route path="/"element={<App />}>
            <Route path="/" element={<Home />}/>
            <Route path="/agendamento" element={<Agendamento />}/>
            <Route path="/internacao" element={<Internacao />}/>
            <Route path="/medico" element={<Medico/>}/>
            <Route path="/paciente" element={<Paciente />}/>
        </Route>
    </Routes>
  )
}

export default index