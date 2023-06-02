import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { SCRegister } from "./LoginPage/LoginPageStyle";
import axios from "axios";
import { useState } from "react";
import {URL_BASE} from '../constants/url';
import { ThreeDots } from "react-loader-spinner";
import { SCLoading } from "./LoginPage/LoginPageStyle";

export default function RegisterPage(){

    const navigate = useNavigate();
    let [disable, setDisable] = useState(false);

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [image, setImage] = useState('');

    function register(e){
        e.preventDefault();
        setDisable(true);

        const URLpost = `${URL_BASE}/auth/sign-up`;
        const bodyPost ={email, password, name, image};

        axios.post(URLpost, bodyPost)
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(error => {
                alert(`O erro foi: ${error.response.data}`);
                setDisable(false);
            });
    }

    

    return (
        <>
            <Logo />
            <form onSubmit={(e) => register(e)}>
                <input disabled={disable} type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required data-test='email-input' />
                <input disabled={disable} type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required data-test='password-input' />
                <input disabled={disable} type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}  required data-test='user-name-input' />
                <input disabled={disable} type="url" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} required data-test='user-image-input' />
                {!disable && (<button disabled={disable} type='submit' data-test='signup-btn'> Cadastrar </button>)}
                {disable && (<SCLoading>
                                <ThreeDots data-test='signup-btn' width='40' height='20' color='#ffffff' visible={true} margin='0 auto' />
                            </SCLoading>)}
            </form>
            <SCRegister onClick={() => navigate('/')} data-test='login-link' > Já tem uma conta? Faça login! </SCRegister>
        </>
    )
}