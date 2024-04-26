import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FormInternacao from '../subpages/Formulario.jsx'

const Index = () => {
  return (
    <Routes>
        <Route path="formulario" element={<FormInternacao />}/>
    </Routes>
  )
}

export default Index