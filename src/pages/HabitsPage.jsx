import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import CreateHabit from "../components/CreateHabit";
import Footer from "../components/Footer";
import Habit from "../components/Habit";
import { GlobalBodyStyle } from "../assets/styles/GlobalBodyStyle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/url";

export default function HabitsPage(){

    const {id, name, image, email, password, token} = useLocation().state;
    let [habit, setHabit] = useState([]);


    useEffect(()=>{
        const config={
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`${URL_BASE}/habits`, config)
            .then(response => setHabit(response.data))
            .catch(error => alert(`O erro foi: ${error.response.data}`));
    },[])

    return (
        <>
            <GlobalBodyStyle />
            
            <Header />
            
            <SCMyHabit>
                <p> Meus hábitos </p>
                <button>+</button>
            </SCMyHabit>
            <SCNoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SCNoHabits>

            <CreateHabit />

            <Habit habit={habit} />

            <Footer />
        </>
    )
}

const SCMyHabit = styled.div`
    width:100%;
    height:34px;
    padding:18px;
    margin-top:100px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color:#126BA5;
    }
    button{
        width:40px;
        height:35px;
        font-size:27px;
    }
`

const SCNoHabits = styled.p`
    padding:0 18px;
    margin: 28px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color:#666666;
`