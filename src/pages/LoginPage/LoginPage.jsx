import { ThreeDots } from "react-loader-spinner";
import Logo from "../../components/Logo";
import { SCRegister, SCLoading} from "./LoginPageStyle";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../constants/url";
import { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../contexts/MyContext";

export default function LoginPage() {

  const navigate = useNavigate();
  let [disable, setDisable] = useState(false);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const{ setToken, setProfileImage, token, profileImage } = useContext(MyContext);

  if(localStorage.getItem('data')){
    const data = JSON.parse(localStorage.getItem("data"));
    let URL = `${URL_BASE}/auth/login`;
    let body={email:data.email, password: data.password};

    axios.post(URL,body)
      .then(response => {
        setToken(response.data.token);
        setProfileImage(response.data.image);
        navigate('/hoje');
      })
      .catch(error => console.log(error.response.data));
  }


  function login(e){
    e.preventDefault();
    setDisable(true);

    let URL = `${URL_BASE}/auth/login`;
    let body={email, password}

    axios.post(URL, body)
      .then(response => {
        setToken(response.data.token);
        setProfileImage(response.data.image);
        localStorage.setItem('data', JSON.stringify(response.data))
        navigate('/hoje');
      })
      .catch(error => {
        alert(`O erro indicado foi: ${error.response.data}`);
        setDisable(false);
      })
  }

  return (
    <>
      <Logo />
      <form onSubmit={(e) => login(e)}>
        <input disabled={disable} type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required data-test='email-input' />
        <input disabled={disable} type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required data-test='password-input' />
        {!disable && (<button disabled={disable} type="submit" data-test='login-btn'>Entrar</button>)}
        {disable && ( <SCLoading>
                        <ThreeDots width='40' height='20' color='#ffffff' visible={true} margin='0 auto' />
                      </SCLoading>)}
      </form>
      <SCRegister onClick={() => navigate('/cadastro')} data-test='signup-link' > Não tem uma conta? Cadastre-se! </SCRegister>
    </>
  );
}