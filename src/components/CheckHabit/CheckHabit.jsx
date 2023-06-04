import axios from "axios"
import styled from "styled-components"
import { URL_BASE } from "../../constants/url"
import { useContext } from "react"
import { MyContext } from "../../contexts/MyContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br';
import { SCCheck, SCSequence, SCcurrent, SChigh } from "./CheckHabitStyle"

export default function CheckHabit({habit, setRender}){

    const {token, count, setCount, setPercentage} = useContext(MyContext);
    const config={
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    const day = dayjs();

    function check(){
        if(!habit.done){
            axios.post(`${URL_BASE}/habits/${habit.id}/check`, {} , config)
                .then(response => {
                    setRender(true);
                    setCount(count+1);
                })
                .catch(error => console.log(error.response));
        } else {
            axios.post(`${URL_BASE}/habits/${habit.id}/uncheck`, {} , config)
                .then(response => {
                    setRender(true);
                    setCount(count-1);
                })
                .catch(error => console.log(error.response));
        }
    }

    return (
        <SCCheck data-test='today-habit-container'>
            <p data-test='today-habit-name' >{habit.name}</p>
            <SCSequence data-test='today-habit-sequence' >Sequência atual: <SCcurrent done={habit.done} >{habit.currentSequence}</SCcurrent> dias</SCSequence>
            <SCSequence data-test='today-habit-record' done={habit.done} high={habit.highestSequence} >Seu recorde: <SChigh current={habit.currentSequence} high={habit.highestSequence} >{habit.highestSequence}</SChigh> dias</SCSequence>
            <ion-icon data-test='today-habit-check-btn' onClick={check} style={{position:'absolute',top:13, right:13, width:'69px', height:'69px', color:!habit.done ? '#EBEBEB' : '#8FC549', borderRadius:'5px'}} name="checkbox"></ion-icon>
        </SCCheck>
    )
}