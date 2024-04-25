import React from 'react'
import { Link} from 'react-router-dom'

import style from './styles/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>MEDICINE</h1>
      </div>
      <span>Menu</span>
      <div className={style.links}>
        <Link to="">Home</Link>
        <Link to="agendamento">Agendamento</Link>
        <Link to="internacao">Internação</Link>
        <Link to="medico">Médico</Link>
        <Link to="paciente">Paciente</Link>
      </div>
    </div>
  )
}

export default Sidebar