import './style.css'
import Inputs from '../../components/Inputs/index'
import {useState} from 'react'
import baseApi from '../../services/baseApi'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await baseApi.post("/login", {
            email: form.email,
            senha: form.password,
          });
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <div className="containerLogin" >
            <form className="cardLogin" onSubmit={handleSubmit} >
                <h1>Login</h1>
                <Inputs form={form} setForm={setForm} />
                <button>Entrar</button>
                <a href="">Criar conta</a>
            </form>
        </div>
    )
}

export default Login;