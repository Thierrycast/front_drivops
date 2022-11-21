import './styles.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function handleExit() {
    navigate("/");
  }

    return (
        <header>
          <h1>Concessionária</h1>
          <button onClick={() => handleExit()} >Sair</button>
        </header>
    )
}

export default Header