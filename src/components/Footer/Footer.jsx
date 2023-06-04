import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../../contexts/MyContext";
import { SCFooter } from "./FooterStyle";

export default function Footer(){

    const navigate = useNavigate();

    const {percentage} = useContext(MyContext);

    return (
        <SCFooter data-test='menu'>
            <p onClick={() => navigate('/habitos')} data-test='habit-link' >Hábitos</p>
            <div onClick={() => navigate('/hoje')} data-test='today-link' >
                <CircularProgressbar value={percentage} text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        trailColor: "transparent"
                    })} />
            </div>
            <p onClick={() => navigate('/historico')} data-test='history-link' >Histórico</p>
        </SCFooter>
    )
}