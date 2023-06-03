import axios from "axios"
import styled from "styled-components"
import { URL_BASE } from "../constants/url"
import { useContext } from "react"
import { MyContext } from "../contexts/MyContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br';

export default function CheckHabit({habit, setRender}){

    const {token, count, setCount, setPercentage} = useContext(MyContext);
    const config={
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    const day = dayjs();
    console.log(count)

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

const SCCheck = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin:10px auto;
    position:relative;
    padding:13px;

    display:flex;
    flex-direction:column;

    p:first-child{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom:7px;
    }
`

const SCSequence = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`

const SCcurrent = styled.span`
    color:${props => props.done ? '#8FC549' : '#666666'};
`

const SChigh = styled.span`
    color:${props => (props.current===props.high && props.current>0) ? '#8FC549' : '#666666'};
`