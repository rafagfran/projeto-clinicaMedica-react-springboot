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
  <nav>
    <ul className={style.menu}>
      <li className={style.li_container} id={style.agendamento}>
        <span>
          <img className={style.icon} src={AgendamentoIcon} alt="Agendamento" />
          Agendamento
        </span>
        <Link className={style.subLinks} to="agendamento/formulario">
          Formulário de agendamento
        </Link>
      </li>
      <li className={style.li_container} id={style.internacao}>
        <span>
          <img className={style.icon} src={InternacaoIcon} alt="Internação" />
          Internação
        </span>
        <Link className={style.subLinks} to="internacao/formulario">
          Formulário de internação
        </Link>
      </li>
      <li className={style.li_container} id={style.medico}>
        <span>
          <img className={style.icon} src={MedicoIcon} alt="Médicos" />
          Médicos
        </span>
        <Link className={style.subLinks} to="medico/cadastro">
          Formulário de cadastro
        </Link>
      </li>
      <li className={style.li_container} id={style.paciente}>
        <span>
          <img className={style.icon} src={PacienteIcon} alt="Pacientes" />
          Pacientes
        </span>
        <Link className={style.subLinks} to="paciente/cadastro">
          Formulário de cadastro
        </Link>
      </li>
    </ul>
  </nav>
</div>

  )
}

export default Sidebar