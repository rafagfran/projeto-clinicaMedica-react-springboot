import React from 'react'
import style from '../styles/CadastroMedico.module.css'
import InputComponent from '../../../components/common/Inputs.jsx'

const CadastroMedico = () => {
  return (
    <div className={style.medico}>
      <h1 className={style.title}>CADASTRO DE MEDICOS</h1>

      <div className={style.form_container}>
        <div id={style.medico_info} className={style.form}>
          <h2>Informações do Médico</h2>
          <InputComponent type='text' placeholder='Nome'/>
          <InputComponent type='text' placeholder='Data de nascimento'/>
          <InputComponent type='text' placeholder='Gênero'/>
          <InputComponent type='text' placeholder='CPF'/>
          <InputComponent type='text' placeholder='RG'/>
          <InputComponent type='text' placeholder='Endereço'/>
          <InputComponent type='text' placeholder='Telefone'/>
          <InputComponent type='text' placeholder='E-mail (opcional)'/>
          <InputComponent type='text' placeholder='Número de identificação profissional (CRM ou equivalente)'/>
        </div>
        <div id={style.especialidade_info} className={style.form}>
          <h2>Especialidade e Qualificações</h2>
          <InputComponent type='text' placeholder='Especialidade médica'/>
          <InputComponent type='text' placeholder='Certificações e qualificações'/>
          <InputComponent type='text' placeholder='Instituição de formação'/>
        </div>
      </div>
    </div>
  )
}

export default CadastroMedico