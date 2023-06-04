import styled from "styled-components"

export const SCHabit = styled.div`
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

export const SCWeekdays = styled.button`
    width:30px;
    height:30px;
    background-color:${props => (props.days.includes(props.i)) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:${props => (props.days.includes(props.i)) ? '#FFFFFF' : '#DBDBDB'};
    
`