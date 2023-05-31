import styled from "styled-components"

export default function Header(){
    return (
        <SCHeader>
            <h1>TrackIt</h1>
            <img src="https://www.gaveanews.com/wp-content/uploads/gabigol-flamengo-fluminense-carioca-24-03-2019_2eestwm8b2qb11rdobawsvamj.jpg" alt="gabigol" />
        </SCHeader>
    )
}

const SCHeader = styled.div`
    width:100vw;
    height:70px;
    background-color:#126BA5;
    padding:0 18px;
    
    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    top:0;

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color:#ffffff;
    }
    img{
        width:51px;
        height:51px;
        border-radius: 98.5px;
    }
`