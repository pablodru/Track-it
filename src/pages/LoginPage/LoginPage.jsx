import { ThreeDots } from "react-loader-spinner";
import Logo from "../../components/Logo";
import { SCRegister, SCLoading} from "./LoginPageStyle";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constants/url";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {

  const navigate = useNavigate();
  let [disable, setDisable] = useState(false);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  function login(e){
    e.preventDefault();
    setDisable(true);

    let URL = `${URL_BASE}/auth/login`;
    let body={email, password}

    axios.post(URL, body)
      .then(response => {
        console.log(response.data);
        navigate('/habitos', {state:response.data});
      })
      .catch(error => {
        alert(`O erro indicado foi: ${error.response.data}`)
      })
  }

  return (
    <>
      <Logo />
      <form onSubmit={(e) => login(e)}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {!disable && (<button type="submit">Entrar</button>)}
        {disable && ( <SCLoading>
                        <ThreeDots width='40' height='20' color='#ffffff' visible={true} margin='0 auto' />
                      </SCLoading>)}
      </form>
      <SCRegister onClick={() => navigate('/cadastro')} > Não tem uma conta? Cadastre-se! </SCRegister>
    </>
  );
}