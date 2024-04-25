import React, { useState } from 'react';
import style from './styles/Login.module.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    async function handleLogin () {
        const url = 'http://localhost:3001/login';
        const dadosDoUsuario = {
            username: username,
            password: password
        };

        try {
            // await axios.post(url,  dadosDoUsuario);
            navigate('/home');
            
        } catch (erro) {
            console.error('Erro ao fazer login:', erro);
        }
    };
    
    return (
        <div className={style.login}>
            <div className={style.container}>
                <h1>LOGIN</h1>
                <div className={style.username}>
                    <input
                        type='text'
                        placeholder='Usuario'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className={style.password}>
                    <input
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className={style.bottom}>
                    <p className={style.forgot}><a href='#'>Esqueceu a senha?</a></p>
                    <div className={style.action}>
                        <button onClick={handleLogin}>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
