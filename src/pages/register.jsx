const Register = () => {
  return(
    
    <div>
      <div className="login-box">
        <form>
          <img src="https://switchapp.com.br/wp-content/uploads/2020/09/SW-Logo-HoriWhiteEffect-2-1024x174.png" alt="switch" />
          <h3>Registre-se</h3>
          <div className="user-box">
            <input
              type="text"
              // value={ email }
              // onChange={ handleEmail }
              placeholder="Nome completo"
            />
          </div>
          <div className="user-box">
            <input
              type="email"
              // value={ email }
              // onChange={ handleEmail }
              placeholder="Digite seu E-mail"
            />
          </div>
          
          <div className="user-box">
            <input
              type="password"
              // value={ password }
              // onChange={ handlePassword }
              placeholder="Escolha sua Senha"
            />
          </div>
          <button
            // onClick={ handleSubmitClick }
            // disabled={ disabled }
            type="button"
            className="btn"
          >Cadastre-se
          </button>
        </form>
      </div>
    </div>
  )
  }
  
  export default Register;