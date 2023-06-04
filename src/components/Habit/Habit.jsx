import styled from "styled-components";
import { weekdays } from "../../constants/weekdays";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { useContext } from "react";
import { HabitContext } from "../../contexts/HabitContext";
import { useNavigate } from "react-router-dom";
import { SCHabit, SCWeekdays } from "./HabitStyle";

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
            <ion-icon data-test='habit-delete-btn' onClick={() => deleteHabit()} style={{position:'absolute', top:'8px', right:'8px', width:'17px', height:'17px', cursor:'pointer'}} name="trash-outline"></ion-icon>
        </SCHabit>
    )
    //MARCAR OS DIAS RECEBIDOS: HABIT.DAYS
}