import styled from "styled-components";
import { weekdays } from "../constants/weekdays";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { ThreeDots } from "react-loader-spinner"; // usar depois
import { HabitContext } from '../contexts/HabitContext';
import { useNavigate } from "react-router-dom";

export default function CreateHabit({ setRender }){

    let [disable, setDisable] = useState(false);

    const {config, setCreate, days, setDays, name, setName} = useContext(HabitContext);

    function addDay(id){
        if(!days.includes(id)){
            setDays([...days, id]);
        } else{
            let newDays = days.filter(day => {
                if(day !== id) return true;
            })
            setDays(newDays);
        }
    }

    function newHabit(e){
        e.preventDefault();
        setDisable(true);

         axios.post(`${URL_BASE}/habits`,{name, days}, config)
             .then(response => {
                 setDays([]);
                 setName('');
                 setCreate(false);
                 setRender(true);
             })
             .catch(error => {
                 alert(`Seu erro foi ${error.response.data}`);
                 setCreate(false);
             });
    }

    return (
        <>
            <SCCreateHabit onSubmit={e => newHabit(e)} data-test='habit-create-container' >
                <div>
                    <input disabled={disable} type="text" placeholder="nome do hábito" required value={name} onChange={e => setName(e.target.value)} data-test='habit-name-input' />
                    <div>
                        {weekdays.map((day, id) => <SCWeekdays disabled={disable} onClick={() => addDay(id)} type='button' key={id} id={id} days={days} data-test='habit-day' > {day}</SCWeekdays>)}
                    </div>
                </div>
                <SCButtons>
                    <button disabled={disable} type="reset" onClick={() => setCreate(false)} data-test='habit-create-cancel-btn' > Cancelar </button>
                    <button disabled={disable} type="submit" data-test='habit-create-save-btn'> Salvar </button>
                </SCButtons>
            </SCCreateHabit>
        </>

    )
}

const SCCreateHabit = styled.form`
    width:340px;
    height:180px;
    background-color:#ffffff;
    border-radius: 5px;
    margin-top: 10px;
    
    display:flex;
    flex-direction:column;
    gap:8px;
    padding:18px;

    div{
        display:flex;
        flex-direction:column;
        gap:8px;
    }

    div:nth-child(2){
        flex-direction:row;
        //width:236px;
        height:30px;
        display:flex;
        gap:4px;
    }
`

const SCButtons = styled.div`
    margin-left:130px;
    button{
        width:84px;
        height:35px;
        font-size: 15.976px;
        line-height: 20px;
        &:first-child{
        background-color:#ffffff;
        color:#52B6FF;
        border:none;
    }
    }
`

const SCWeekdays = styled.button`
    width:30px;
    height:30px;
    background-color:${props => (props.days.includes(props.id)) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:${props => (props.days.includes(props.id)) ? '#FFFFFF' : '#DBDBDB'};
    
`