import { useState } from 'react'
import axios from 'axios'
import styles from './styles/form.module.css'
import { useNavigate } from 'react-router-dom'

const baseURL = "http://localhost:3000/api/"

const Form = () => {
  const [user, setUser] = useState({nome: "", email: "", login: "", password: "" })
  const navigate = useNavigate()

  const registerUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post(`${baseURL}register/`, {
      nome: user.nome,
      email: user.email,
      login: user.login,
      password: user.password
    })
    .then(() => {
      navigate("/login")
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