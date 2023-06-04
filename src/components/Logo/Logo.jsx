import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import { SCLogo } from './LogoStyle'

export default function Logo(){
    return (
        <SCLogo src={logo} alt='logo' />
    )
}