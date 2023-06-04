import styled from "styled-components"

export const SCCreateHabit = styled.form`
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

export const SCButtons = styled.div`
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

export const SCWeekdays = styled.button`
    width:30px;
    height:30px;
    background-color:${props => (props.days.includes(props.id)) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius:5px;
    color:${props => (props.days.includes(props.id)) ? '#FFFFFF' : '#DBDBDB'};
    
`