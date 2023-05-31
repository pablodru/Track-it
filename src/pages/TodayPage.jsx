import styled from "styled-components";
import {GlobalBodyStyle} from '../assets/styles/GlobalBodyStyle';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckHabit from "../components/CheckHabit";


export default function TodayPage(){
    return (
        <>
            <GlobalBodyStyle />
            <Header />
            
            <SCDate>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
                {/* <p>67% dos hábitos concluídos</p> */}
            </SCDate>

            <CheckHabit />

            <Footer />
        </>
    )
}

const SCDate = styled.div`
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
        color: #BABABA; //#8FC549
    }
`