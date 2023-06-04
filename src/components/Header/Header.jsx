import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../../contexts/MyContext"
import { useNavigate } from "react-router-dom";
import { SCHeader } from "./HeaderStyle";

export default function Header(){

    const {profileImage} = useContext(MyContext);
    const navigate = useNavigate();

    function exit(){
        localStorage.removeItem('data');
        navigate('/')
    }

    return (
        <SCHeader data-test='header'>
            <ion-icon onClick={exit} name="exit-outline" style={{width:'30px', height:'30px', color:'#FFFFFF', cursor:'pointer'}}></ion-icon>
            <h1 onClick={() => navigate('/')} >TrackIt</h1>
            <img src={profileImage} alt="Imagem de perfil" data-test='avatar' />
        </SCHeader>
    )
}