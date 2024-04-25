import React from 'react'
import style from './styles/Inputs.module.css'

const Inputs = ({type, placeholder}) => {
  return (
    <div>
        <input className={style.input} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Inputs