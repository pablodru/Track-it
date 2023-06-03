import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../contexts/MyContext";

export default function Footer(){

    const navigate = useNavigate();

    const {percentage} = useContext(MyContext);

    return (
        <SCFooter data-test='menu'>
            <p onClick={() => navigate('/habitos')} data-test='habit-link' >Hábitos</p>
            <div onClick={() => navigate('/hoje')} data-test='today-link' >
                <CircularProgressbar value={percentage} text='Hoje' strokewidth={8} background backgroundPadding={6} style={buildStyles({
                    textSize: '18px',
                    backgroundColor:'#52B6FF', //USAR CONTEXT PARA OS VALORES DA BARRA DE PROGRESSO
                    textColor: '#ffffff',
                    pathColor: '#ffffff',
                    trailColor: 'transparent'
                })} />
            </div>
            <p onClick={() => navigate('/historico')} data-test='history-link' >Histórico</p>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    width:100%;
    height:70px;
    background-color:#ffffff;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 32px;

    position:fixed;
    bottom:0;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color:#52B6FF;
    }

    div{
        width:91px;
        height:91px;
        margin-bottom:40px;
    }
`