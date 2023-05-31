import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import CreateHabit from "../components/CreateHabit";
import Footer from "../components/Footer";

export default function HabitsPage(){
    return (
        <>
            <GlobalStyle />
            
            <Header />
            
            <SCMyHabit>
                <p> Meus hábitos </p>
                <button>+</button>
            </SCMyHabit>
            <SCNoHabits>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </SCNoHabits>

            <CreateHabit />

            <Footer />
        </>
    )
}

const SCMyHabit = styled.div`
    width:100%;
    height:34px;
    padding:18px;
    margin-top:100px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color:#126BA5;
    }
    button{
        width:40px;
        height:35px;
        font-size:27px;
    }
`

const SCNoHabits = styled.p`
    padding:0 18px;
    margin: 28px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color:#666666;
`

const GlobalStyle = createGlobalStyle`
    body{
        background-color:#f0efefdf; //mudarrrrrrr
        width:100vw;
        overflow-x:hidden;
    }
`