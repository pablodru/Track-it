import styled from "styled-components";
import logo from '../assets/logo.png';

export default function Logo(){
    return (
        <SCLogo src={logo} alt='logo' />
    )
}

const SCLogo = styled.img`
    width:200px;
    height:27%;
    margin:100px auto 33px auto;
    display:block;
`