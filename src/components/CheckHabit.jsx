import styled from "styled-components"

export default function CheckHabit(){
    return (
        <SCCheck>
            <p>Ler 1 capítulo de livro</p>
            <SCSequence>Sequência atual: 3 dias</SCSequence>
            <SCSequence>Seu recorde: 5 dias</SCSequence>
            <ion-icon style={{position:'absolute',top:13, right:13, width:'69px', height:'69px', color:'#EBEBEB', borderRadius:'5px'}} name="checkbox"></ion-icon>
        </SCCheck>
    )
}

const SCCheck = styled.div`
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

const SCSequence = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`