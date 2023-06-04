import styled from "styled-components"

export const SCDate = styled.div`
    width:100%;
    height:auto;
    padding:18px;
    margin-top:90px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-items:center;

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color:#126BA5;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`

export const SCdone = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color:${props => props.percentage===0 ? '#BABABA' : '#8FC549'}
`