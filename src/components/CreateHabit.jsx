import styled from "styled-components";
import { weekdays } from "../constants/weekdays";

export default function CreateHabit(){
    return (
        <SCCreateHabit>
            <div>
                <input type="text" placeholder="nome do hábito" />
                <div>
                    {weekdays.map((day, id) => <SCWeekdays type='button' key={id}> {day}</SCWeekdays>)}
                </div>
            </div>
            <SCButtons>
                <button type="reset"> Cancelar </button>
                <button type="submit"> Salvar </button>
            </SCButtons>
        </SCCreateHabit>
    )
}

const SCCreateHabit = styled.form`
    width:340px;
    height:180px;
    background-color:#ffffff;
    border-radius: 5px;
    
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
        width:236px;
        height:30px;
        display:flex;
        gap:4px;
    }
`

const SCButtons = styled.div`
    margin-left:186px;
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
    background-color:#ffffff;
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:#DBDBDB;
    
`