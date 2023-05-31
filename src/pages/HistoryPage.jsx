import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalBodyStyle } from "../assets/styles/GlobalBodyStyle";

export default function HistoryPage(){
    return (
        <>
            <GlobalBodyStyle />
            <Header />

            <SCHistory> Histórico </SCHistory>
            <SCSoon> Em breve você poderá ver o histórico dos seus hábitos aqui! </SCSoon>

            <Footer />
        </>
    )
}

const SCHistory = styled.p`
    margin:100px auto 20px 18px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`

const SCSoon = styled.p`
    width:338px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-left: 18px;
`