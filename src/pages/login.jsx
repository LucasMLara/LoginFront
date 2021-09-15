import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router';
// import axios from 'axios';
import "../Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };
  // ​
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };
  // ​

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const logging = await axios({
        method: "post",
        url: "http://localhost:3333/",
        headers: { "content-type": "application/json" },
        data: {
          email,
          password,
        },
      });
      console.log(logging.data);
      setData(logging.data)
      setRedirect(true);
    } catch (error) {console.log(error.response);}
  };


  const validInputs = () => {
    const minPasswordLength = 5;
    const emailPattern = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
    const validPassword = password.length > minPasswordLength;
    const validEmail = email.match(emailPattern);
    setDisabled(!(validEmail && validPassword));
  };
  useEffect(validInputs, [email, password, disabled]);

  // const handleSubmitClick = () => {
  //   setEmail("");
  //   setPassword("");
  // };
  return (
    <div>
      {redirect && <Redirect
  to={{
    pathname: "/home",
    state: data,
  }}
/>}
      <div className="login-box">
        <form onSubmit={loginSubmit}>
          <img
            src="https://switchapp.com.br/wp-content/uploads/2020/09/SW-Logo-HoriWhiteEffect-2-1024x174.png"
            alt="switch"
          />
          <h3>Login</h3>
          <div className="user-box">
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="E-mail"
            />
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Senha"
            />
          </div>
          <button
            disabled={disabled}
            type="submit"
            className="btn"
          >
            {!disabled && (
              <>
                <span />
                <span />
                <span />
                <span />
              </>
            )}
            Entrar
          </button>
          <button
            // onClick={handleSubmitClick}
            disabled={!disabled}
            type="button"
            className="btn"
          >
            {/* {disabled && (
              <>
                <span />
                <span />
                <span />
                <span />
              </>
            )} */}
            Cadastre-se
          </button>
          {/* <button
            onClick={ handleSubmitClick }
            disabled={ !disabled }
            type="button"
            className="miss-password-btn"
            
          >
            {disabled && (
              <>
                <span />
                <span />
                <span />
                <span />
              </>
            )}Esqueci a senha
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
