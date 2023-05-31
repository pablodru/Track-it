import { ThreeDots } from "react-loader-spinner";
import Logo from "../../components/Logo";
import { SCRegister, SCLoading} from "./LoginPageStyle";

export default function LoginPage() {
  return (
    <>
      <Logo />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
        {/* <SCLoading>
          <ThreeDots width='40' height='20' color='#ffffff' visible={true} margin='0 auto' />
        </SCLoading> */}
      </form>
      <SCRegister> Não tem uma conta? Cadastre-se! </SCRegister>
    </>
  );
}