import { weekdays } from "../constants/weekdays";
import styled from "styled-components";

export default function Weekdays(){
    return(
        <>
            {weekdays.map((day, id) => <SCWeekdays type='button' key={id}> {day}</SCWeekdays>)}
        </>
    )
}

const SCWeekdays = styled.button`
    width:30px;
    height:30px;
    background-color:#ffffff;
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:#DBDBDB;
    
`