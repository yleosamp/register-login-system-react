import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import styles from './styles/form.module.css'

const baseURL = "http://localhost:3000/api/"

const Form = () => {
  const [user, setUser] = useState({nome: "", email: "", login: "", password: "" })

  const registerUser = () => {

    axios.post(`${baseURL}register/`, {
      nome: user.nome,
      email: user.email,
      login: user.login,
      password: user.password
    })
    .then((response: any) => {
      setUser(response.data)
    })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const attributeName = e.currentTarget.getAttribute("name")
    
    if(attributeName) {
      setUser({ ...user, [attributeName]: e.currentTarget.value })
    }
  }

  return (
    <div id={ styles.form }>
      <form onSubmit={ registerUser }>
        <label htmlFor="nome">Digite o seu nome</label>
        <input type="text" name="nome" onChange={ (e) => handleChange(e) }/>

        <label htmlFor="email">Digite o seu email</label>
        <input type="text" name="email" onChange={ (e) => handleChange(e) }/>

        <label htmlFor="login">Digite o seu login</label>
        <input type="text" name="login" onChange={ (e) => handleChange(e) }/>

        <label htmlFor="password">Digite a sua senha</label>
        <input type="password" name="password" onChange={ (e) => handleChange(e) }/>

        <input type="submit" value="Registrar" className={ styles.submit }/>
      </form>

    </div>
  )
}

export default Form