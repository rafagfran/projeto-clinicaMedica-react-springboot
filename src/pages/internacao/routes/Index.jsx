import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FormInternacao from '../subpages/Formulario.jsx'
import MainInternacao from '../Index.jsx'

const Index = () => {
  return (
    <Routes>
        <Route path="" element={<MainInternacao />}/>
        <Route path="formulario" element={<FormInternacao />}/>
    </Routes>
  )
}

export default Index