import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CadastroPaciente from '../subpages/CadastroPaciente.jsx'

const Index = () => {
  return (
    <Routes>
        <Route path="cadastro" element={<CadastroPaciente />}/>
    </Routes>
    
  )
}

export default Index