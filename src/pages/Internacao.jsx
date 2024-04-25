import React from 'react'
import InputComponent from '../components/common/Inputs.jsx'

import style from './styles/Internacao.module.css'

const Internacao = () => {
  return (
    <div className={style.internacao}>
      <h1 className={style.title}>Internação</h1>

      <div className={style.form_container}>
        <div id={style.paciente_info} className={style.form}>
          <h2>Informações do Paciente</h2>
          <InputComponent type='text' placeholder='Nome do paciente'/>
          <InputComponent type='text' placeholder='Data de nascimento'/>
          <InputComponent type='text' placeholder='CPF'/>
          <InputComponent type='text' placeholder='RG'/>
          <InputComponent type='text' placeholder='Endereço'/>
          <InputComponent type='text' placeholder='Telefone'/>
          <InputComponent type='text' placeholder='E-mail (opcional)'/>
          <InputComponent type='text' placeholder='Plano de Saúde (se aplicavel)'/>
          <InputComponent type='text' placeholder='Numero do cartão do plano de saúde (se aplicavel)'/>
        </div>
        <div id={style.emergecia_info} className={style.form}>
          <h2>Contato de Emergência</h2>
          <InputComponent type='text' placeholder='Nome do contato de emergencia'/>
          <InputComponent type='text' placeholder='Telefone do contato de emergencia'/>
          <InputComponent type='text' placeholder='Relação com o paciente'/>
        </div>
        <div id={style.internacao_info} className={style.form}>
          <h2>Informações da Internação</h2>
          <InputComponent type='text' placeholder='Data de entrada na clinica'/>
          <InputComponent type='text' placeholder='TMotivo da internação'/>
          <InputComponent type='text' placeholder='Departamento ou ala de internação'/>
          <InputComponent type='text' placeholder='Procedimentos médicos previstos (se conhecidos)'/>
          <InputComponent type='text' placeholder='Observações adicionais'/>
        </div>
        <div id={style.historicoMedico_info} className={style.form}>
          <h2>Histórico Médico</h2>
          <InputComponent type='text' placeholder='Alergias conhecidas'/>
          <InputComponent type='text' placeholder='Medicações em uso'/>
          <InputComponent type='text' placeholder='Doenças pré-existentes'/>
          <InputComponent type='text' placeholder='Histórico de cirurgias ou procedimentos médicos anteriores'/>
          <InputComponent type='text' placeholder='Outras condições médicas relevantes'/>
        </div>
        <div id={style.exames_info} className={style.form}>
          <h2>Exames e Testes</h2>
          <InputComponent type='text' placeholder='Resultados de exames recentes (por exemplo: exames de sangue, radiografias, tomografias)'/>
          <InputComponent type='text' placeholder='Prescrições médicas (se aplicável)'/>
        </div>
        <div id={style.saida_info} className={style.form}>
          <h2>Previsão de Alta</h2>
          <InputComponent type='text' placeholder='Data prevista de alta'/>
          <InputComponent type='text' placeholder='Instruções de acompanhamento médico'/>
          <InputComponent type='text' placeholder='Prescrições para medicação após a alta'/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Internacao