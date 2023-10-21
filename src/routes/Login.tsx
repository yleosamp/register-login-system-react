import React, { useState } from 'react'
import styles from '../components/styles/form.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

const baseURL = "http://localhost:3000/api/"

const Login = () => {
  const [login, setLogin] = useState({ login: "", password: "" })
  const [userInfo, setUserInfo] = useState({ login: "", nome: "" })
  const navigate = useNavigate()

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post(`${baseURL}login/`, {
      login: login.login,
      password: login.password
    })
    .then((response: any) => {
      const profileLogado = response.data.Logado[0][0]
      if(response.status === 200) {
        setUserInfo(profileLogado)
        
        //navigate("/")
      } else if(response.status === 203) {
        navigate("/error")
      }
    })
  }

  const loginHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const getAttribute = e.currentTarget.getAttribute("name")

    if(getAttribute) {
      setLogin({ ...login, [getAttribute]: e.currentTarget.value })
    }
  }

  return (
    <div>
      <form onSubmit={ loginUser }>
        <label htmlFor="login">Digite seu login</label>
        <input type="text" name="login" onChange={ (e) => loginHandler(e) } />

        <label htmlFor="password">Digite sua senha</label>
        <input type="password" name="password" onChange={ (e) => loginHandler(e) } />

        <input type="submit" value="Entrar" className={ styles.submit } />
      </form>

      <h1 style={{ textAlign: "center" }}>Login: { userInfo.login }</h1>
      <h1 style={{ textAlign: "center" }}>Nome: { userInfo.nome }</h1>
    </div>
  )
}

export default Login