import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'


export const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nome, setNome] = useState('')
    const [error, setError] = useState('')

    const { createUser, error:authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password,
            confirmPassword,
            nome
        }

        const res = await createUser(user)

        console.table(res)
        navigate("/login")
    }

    useEffect(() =>{
        if(authError){
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se no Nomade Life</h1>
        <p>Após ter feito o cadastro, explore o ambiente e compartilhe suas experiências</p>
        <form onSubmit={handlerSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                    type='text'
                    name='nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder='Insira seu nome'
                />
            </label>
            <label>
                <span>E-mail:</span>
                <input 
                    type='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Cadastre-se com o seu e-mail'
                />
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Cadastre-se com sua senha'
                />
            </label>
            <label>
                <span>Confirmação:</span>
                <input 
                    type='password'
                    name='password-confirm'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Confirme sua senha'
                />
            </label>
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn'>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register