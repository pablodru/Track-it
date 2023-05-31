import Logo from "../components/Logo";
import { SCRegister } from "./LoginPage/LoginPageStyle";

export default function RegisterPage(){
    return (
        <>
            <Logo />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="url" placeholder="foto" />
            </form>
            <SCRegister> Já tem uma conta? Faça login! </SCRegister>
        </>
    )
}