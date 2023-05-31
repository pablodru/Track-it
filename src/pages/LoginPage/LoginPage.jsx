import Logo from "../../components/Logo";
import { SCRegister} from "./LoginPageStyle";

export default function LoginPage() {
  return (
    <>
      <Logo />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
      <SCRegister> Não tem uma conta? Cadastre-se! </SCRegister>
    </>
  );
}