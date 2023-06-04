import styled from "styled-components"
import { GlobalBodyStyle } from "../../assets/styles/GlobalBodyStyle"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import loading from '../../assets/images/spinner.svg';
import { SCLoading } from "./LoadingStyle";

export default function Loading(){
    return (
        <>
            <GlobalBodyStyle />
            <Header />
            <SCLoading>
                <img src={loading} alt="loading" />
            </SCLoading>
            <Footer />
        </>
    )
}