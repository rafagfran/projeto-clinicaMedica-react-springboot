import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CadastroMedico from '../subpages/CadastroMedico.jsx'

const Index = () => {
  return (
   <Routes>
        <Route path="cadastro" element={<CadastroMedico />}/>
   </Routes>
  )
}

export default Index