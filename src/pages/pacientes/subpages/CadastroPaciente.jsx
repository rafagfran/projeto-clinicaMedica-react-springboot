import React from 'react'
import style from '../styles/CadastroPaciente.module.css'
import InputComponent from '../../../components/common/Inputs.jsx'

const CadastroPaciente = () => {
  return (
    <div className={style.paciente}>
      <h1 className={style.title}>CADASTRO DE PACIENTES</h1>

      <div className={style.form_container}>
        <div id={style.paciente_info} className={style.form}>
          <h2>Informações do Paciente</h2>
          <InputComponent type='text' placeholder='Nome'/>
          <InputComponent type='text' placeholder='Data de nascimento'/>
          <InputComponent type='text' placeholder='Gênero'/>
          <InputComponent type='text' placeholder='CPF'/>
          <InputComponent type='text' placeholder='RG'/>
          <InputComponent type='text' placeholder='Endereço'/>
          <InputComponent type='text' placeholder='Telefone'/>
          <InputComponent type='text' placeholder='E-mail (opcional)'/>
          <InputComponent type='text' placeholder='Estado Civil'/>
        </div>
        <div id={style.saude_info} className={style.form}>
          <h2>Informações de saúde</h2>
          <InputComponent type='text' placeholder='Histórico médico relevante'/>
          <InputComponent type='text' placeholder='Medicamentos em uso regular'/>
          <InputComponent type='text' placeholder='Histórico de alergias a medicamentos'/>
        </div>
      </div>
    </div>
  )
}

export default CadastroPaciente