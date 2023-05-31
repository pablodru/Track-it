import styled from "styled-components";
import Weekdays from "./Weekdays";

export default function Habit(){
    return(
        <SCHabit>
            <p>Ler um capítulo de livro</p>
            <div>
                <Weekdays />
            </div>
            <ion-icon style={{position:'absolute', top:'8px', right:'8px', width:'17px', height:'17px'}} name="trash-outline"></ion-icon>
        </SCHabit>
    )
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