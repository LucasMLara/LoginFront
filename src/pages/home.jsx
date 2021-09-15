import { useLocation } from 'react-router-dom';

const Home = () => {
const { state } = useLocation();
console.log('HOME', state);

  return(
    <div>
      <div className="login-box">
        <form>
          <img src="https://switchapp.com.br/wp-content/uploads/2020/09/SW-Logo-HoriWhiteEffect-2-1024x174.png" alt="switch" />
          <h1>Bem vindo</h1>
          <h3>{!state ? "Bem vindx, Visitante! Faça seu Login ou Cadastre-se" : state.fullName}</h3>          
          <button
            // onClick={ handleSubmitClick }
            // disabled={ disabled }
            type="button"
            className="btn"
          >Sair
          </button>
        </form>
      </div>
    </div>
  )
  }
  
  export default Home;