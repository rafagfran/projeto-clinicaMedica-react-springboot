import React from 'react'
import { Link} from 'react-router-dom'

import AgendamentoIcon from '../../assets/agendamento-icon.png'
import InternacaoIcon from '../../assets/internacao-icon.png'
import HomeIcon from '../../assets/home-icon.png'
import MedicoIcon from '../../assets/medico-icon.png'
import PacienteIcon from '../../assets/paciente-icon.png'

import style from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>MEDICINE</h1>
      </div>
      <span>Menu</span>
      <div className={style.links}>
        <div id={style.home} className={style.navContainer}>
          <Link className={style.mainLinks} to=""><img className={style.icon}src={HomeIcon} alt="" />Home</Link>
        </div>
        <div id={style.agendamento} className={style.navContainer}>
          <Link className={style.mainLinks} to="agendamento"><img className={style.icon} src={AgendamentoIcon} alt="" />Agendamento</Link>
          <Link className={style.subLinks} to="agendamento/formulario">Forumlario de agendamento</Link>
        </div>
        <div id={style.internacao} className={style.navContainer} >
          <Link className={style.mainLinks} to="internacao"><img className={style.icon}src={InternacaoIcon} alt="" /> Internação</Link>
          <Link className={style.subLinks} to="internacao/formulario">Forumlario de internacao</Link>
        </div>
        <div id={style.medico} className={style.navContainer}>
          <Link className={style.mainLinks} to="medico"><img className={style.icon} src={MedicoIcon} alt="" />Médico</Link>
          <Link className={style.subLinks} to="medico/cadastro">Formulario de cadastro</Link>
        </div>
        <div id={style.paciente} className={style.navContainer}>
          <Link className={style.mainLinks} to="paciente"><img className={style.icon} src={PacienteIcon} alt="" />Paciente</Link>
          <Link className={style.subLinks} to="paciente/cadastro">Forumlario de cadastro</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar