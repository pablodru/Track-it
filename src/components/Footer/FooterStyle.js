import styled from "styled-components";

export const SCFooter = styled.div`
    width:100%;
    height:70px;
    background-color:#ffffff;
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 32px;

    position:fixed;
    bottom:0;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color:#52B6FF;
        cursor: pointer;
    }

    div{
        width:91px;
        height:91px;
        margin-bottom:40px;
        cursor: pointer;
    }
`