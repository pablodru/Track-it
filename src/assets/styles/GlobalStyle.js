import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    form{
        width:81%;
        height:auto;
        margin:0 auto;

        display: flex;
        flex-direction:column;
        justify-content: space-between;
        align-items:center;
        gap:6px;
    }
    input{
        width:303px;
        height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color:#DBDBDB;
            margin-left:11px;
        }
    }
    button{
        width:303px;
        height:45px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        border:1px solid #52B6FF;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        cursor:pointer;
    }
    
`;
