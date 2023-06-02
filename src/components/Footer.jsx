import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer(){

    const navigate = useNavigate();

    return (
        <SCFooter>
            <p> onClick={() => navigate('/habitos')}Hábitos</p>
            <div onClick={() => navigate('/hoje')}>
                <CircularProgressbar value={50} text='Hoje' strokewidth={8} background backgroundPadding={6} style={buildStyles({
                    textSize: '18px',
                    backgroundColor:'#52B6FF', //USAR CONTEXT PARA OS VALORES DA BARRA DE PROGRESSO
                    textColor: '#ffffff',
                    pathColor: '#ffffff',
                    trailColor: 'transparent'
                })} />
            </div>
            <p onClick={() => navigate('/historico')}>Histórico</p>
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