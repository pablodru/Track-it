import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import CreateHabit from "../components/CreateHabit";
import Footer from "../components/Footer";
import Habit from "../components/Habit";
import { GlobalBodyStyle } from "../assets/styles/GlobalBodyStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { MyContext } from "../contexts/MyContext";
import { HabitContext } from '../contexts/HabitContext';
import Loading from "../components/Loading";

export default function HabitsPage(){

    let [habit, setHabit] = useState([]);
    let [create, setCreate] = useState(false);
    let [name, setName] = useState('');
    let [days, setDays] = useState([]);
    let [render, setRender] = useState(false);
    const {token, setToken, setProfileImage} = useContext(MyContext);

    const config={
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(()=>{

        if(localStorage.getItem('data')){
            const data = JSON.parse(localStorage.getItem('data'));
            setToken(data.token);
            setProfileImage(data.image);

            axios.get(`${URL_BASE}/habits`, {headers:{'Authorization': `Bearer ${data.token}`}})
                .then(response => setHabit(response.data))
                .catch(error => console.log(error.response));

            setRender(false);
        }
    },[render])

    if(habit.length===0){
        return (
            <Loading />
        )
    }

    return (
        <>
            <GlobalBodyStyle />
            
            <Header />

            <HabitContext.Provider value={{config, setCreate, days, setDays, name, setName}}>
            
                <SCMyHabit>
                    <p> Meus hábitos </p>
                    <button onClick={() => setCreate(true)} data-test='habit-create-btn' >+</button>
                </SCMyHabit>

                {create && (<CreateHabit config={config} setCreate={setCreate} setRender={setRender} />)}

                {habit.length===0 && (<SCNoHabits> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </SCNoHabits>)}

                {habit.length>0 && (habit.map(h => <Habit key={h.id} habit={h} setRender={setRender} />))}

            </HabitContext.Provider>
            <SCspace></SCspace>

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
        width:35px;
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

export const SCspace = styled.div`
    width:100%;
    height:90px;
`