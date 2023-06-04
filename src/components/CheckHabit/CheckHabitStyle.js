import styled from "styled-components"

export const SCCheck = styled.div`
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

export const SCSequence = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`

export const SCcurrent = styled.span`
    color:${props => props.done ? '#8FC549' : '#666666'};
`

export const SChigh = styled.span`
    color:${props => (props.current===props.high && props.current>0) ? '#8FC549' : '#666666'};
`