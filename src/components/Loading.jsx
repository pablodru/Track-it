import styled from "styled-components"
import { GlobalBodyStyle } from "../assets/styles/GlobalBodyStyle"
import Header from "./Header"
import Footer from "./Footer"
import loading from '../assets/images/spinner.svg';

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

const SCLoading = styled.div`
    width:200px;
    height:200px;
    margin: 200px auto;
    img{
        width:100%;
        height:100%;
    }
`