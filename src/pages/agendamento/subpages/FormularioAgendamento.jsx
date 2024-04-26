import React from 'react'
import style from '../styles/FormularioAgendamento.module.css'
import InputComponent from '../../../components/common/Inputs.jsx'

const FormularioAgendamento = () => {
  return (
    <div className={style.agendamento}>
      <h1 className={style.title}>FORMULARIO DE AGENDAMENTO</h1>

      <div className={style.form_container}>
        <div id={style.paciente_info} className={style.form}>
          <h2>Informações do Paciente</h2>
          <InputComponent type='text' placeholder='Nome do paciente'/>
          <InputComponent type='text' placeholder='Data de nascimento'/>
          <InputComponent type='text' placeholder='Gênero'/>
          <InputComponent type='text' placeholder='CPF'/>
          <InputComponent type='text' placeholder='RG'/>
          <InputComponent type='text' placeholder='Endereço'/>
          <InputComponent type='text' placeholder='Telefone'/>
          <InputComponent type='text' placeholder='E-mail (opcional)'/>
        </div>
        <div id={style.consulta_info} className={style.form}>
          <h2>Consulta</h2>
          <InputComponent type='text' placeholder='Especialidade médica'/>
          <InputComponent type='text' placeholder='Médico de preferencia'/>
          <InputComponent type='text' placeholder='Data'/>
          <InputComponent type='text' placeholder='Hora'/>
          <InputComponent type='text' placeholder='Motivo da consulta'/>
        </div>
      </div>
    </div>
  )
}

export default FormularioAgendamento
