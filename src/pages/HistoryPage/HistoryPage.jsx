import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { GlobalBodyStyle } from "../../assets/styles/GlobalBodyStyle";
import Calendar from "react-calendar";
import { SCspace } from "../HabitsPage/HabitsPageStyle";
import 'react-calendar/dist/Calendar.css';
import { useContext, useEffect } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { MyContext } from "../../contexts/MyContext";
import { SCHistory, SCSoon, SCdiv } from "./HistoryPageStyle";

export default function HistoryPage(){

    const { token } = useContext(MyContext);

    // useEffect(() => {
    //     axios.get(`${URL_BASE}/habits/history/daily`, {headers: {'Authorization': `Bearer ${token}`}})
    //         .then(response => {

    //         })
    // },[])


    return (
        <>
            <GlobalBodyStyle />
            <Header />

            <SCHistory> Histórico </SCHistory>
            <SCSoon> Em breve você poderá ver o histórico dos seus hábitos aqui! </SCSoon>
            {/* <SCdiv>
                <Calendar locale='pt-br' style ={{width:'335px', height:'402px', margin:'0 auto'}} />
            </SCdiv> */}

            <SCspace />
            <Footer />
        </>
    )
}