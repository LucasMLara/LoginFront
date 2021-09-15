import axios from "axios";
import React, { useState } from "react";
import { Redirect } from 'react-router';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const registering = await axios({
        method: "post",
        url: "http://localhost:3333/register",
        headers: { "content-type": "application/json" },
        data: {
          fullName,
          email,
          password,
        },
      });
      alert('Usuário cadastrado com sucesso!')
      setRedirect(true);
    } catch (error) {alert(error.response.data.message);}
  };


  return(
    <div>
      {redirect && <Redirect
  to={{
    pathname: "/",
  }}
/>}
      <div className="login-box">
        <form onSubmit={registerSubmit}>
          <img src="https://switchapp.com.br/wp-content/uploads/2020/09/SW-Logo-HoriWhiteEffect-2-1024x174.png" alt="switch" />
          <h3>Registre-se</h3>
          <div className="user-box">
            <input
              type="text"
              value={ fullName }
              onChange={({target: {value}})=> setFullName(value)}
              placeholder="Nome completo"
            />
          </div>
          <div className="user-box">
            <input
              type="email"
              value={ email }
              onChange={({target: {value}})=> setEmail(value)}
              placeholder="Digite seu E-mail"
            />
          </div>
          
          <div className="user-box">
            <input
              type="password"
              value={ password }
              onChange={({target: {value}})=> setPassword(value)}
              placeholder="Escolha sua Senha"
            />
          </div>
          <button
            type="submit"
            className="btn"
          >Cadastre-se
          </button>
        </form>
      </div>
    
    </div>
  )
  }
  
  export default Register;