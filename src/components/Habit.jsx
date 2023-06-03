import styled from "styled-components";
import { weekdays } from "../constants/weekdays";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { useContext } from "react";
import { HabitContext } from "../contexts/HabitContext";
import { useNavigate } from "react-router-dom";

export default function Habit({habit, setRender}){

    const navigate = useNavigate();
    const {id, name, days} = habit;
    const {config} = useContext(HabitContext);

    function deleteHabit(){

        let del = confirm('Deseja deletar este hábito?');

        if(del){
            axios.delete(`${URL_BASE}/habits/${id}`, config)
                .then(response => setRender(true))
                .catch(error => alert(`O erro foi: ${error.response.data}`));
        }
    }

    return(
        <SCHabit data-test='habit-container' >
            <p data-test='habit-name' >{name}</p>
            <div>
                {weekdays.map((day, i) => <SCWeekdays type='button' key={i} i={i} days={days} data-test='habit-day' > {day} </SCWeekdays>)}
            </div>
            <ion-icon data-test='habit-delete-btn' onClick={() => deleteHabit()} style={{position:'absolute', top:'8px', right:'8px', width:'17px', height:'17px'}} name="trash-outline"></ion-icon>
        </SCHabit>
    )
    //MARCAR OS DIAS RECEBIDOS: HABIT.DAYS
}

const SCHabit = styled.div`
    width:340px;
    height:91px;
    background-color:#ffffff;
    border-radius:5px;
    margin:10px auto;
    padding: 12px 15px;
    
    position:relative;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:10px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color:#666666;
    }

    div{
        flex-direction:row;
        width:236px;
        height:30px;
        display:flex;
        gap:4px;
    }
`

const SCWeekdays = styled.button`
    width:30px;
    height:30px;
    background-color:${props => (props.days.includes(props.i)) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:${props => (props.days.includes(props.i)) ? '#FFFFFF' : '#DBDBDB'};
    
`