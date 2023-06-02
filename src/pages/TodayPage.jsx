import styled from "styled-components";
import {GlobalBodyStyle} from '../assets/styles/GlobalBodyStyle';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckHabit from "../components/CheckHabit";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../contexts/MyContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/url";


export default function TodayPage(){

    const {setProfileImage} = useContext(MyContext)
    const {id, name, image, email, password, token} = useLocation().state;

    let [habits, setHabits] = useState([]);
    

    useEffect(() =>{
        setProfileImage(image);

        const config={
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get(`${URL_BASE}/habits/today`, config)
            .then(response => setHabits(response.data))
            .catch(error => alert(`O erro foi: ${error.response.data}`));
    },[])

    // if(habits.length===0){
    //     return <div>Carregando...</div>
    // }

    return (
        <>
            <GlobalBodyStyle />
            <Header />
            
            <SCDate>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
                {/* <p>67% dos hábitos concluídos</p> */}
            </SCDate>

            <CheckHabit />

            <Footer />
        </>
    )
}

const SCDate = styled.div`
    width:100%;
    height:auto;
    padding:18px;
    margin-top:90px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-items:center;

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color:#126BA5;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA; //#8FC549
    }
`