import styled from "styled-components";

export const Pads = styled.div`
    border: 2px solid #47476b;
    border-top: none;
    padding: 5px;
    background: black;
    width: 320px;
    position: relative;
`
const NumberKey = styled.button`
    background-color: #4d4d4d;
    color: white;
    outline: 1px solid black;
    font-size: 1.2rem;
    height: 4rem;
    width: 5rem;
    cursor: default;
    border: none;
    &&:hover{
        color: black;
        outline: 1px solid grey;
        z-index: 3;
    }
`

const SymbolKey = styled.button`
    background-color: #666666;
    color: white;
    font-size: 1.2rem;
    outline: 1px solid black;
    height: 4rem;
    width: 5rem;
    cursor: default;
    border: none;
    &&:hover{
        color: black;
        outline: 1px solid grey;
        z-index: 3;
    }
`

const ResetKey = styled.button`
    background-color: #ac3939;
    width: 10rem;
    font-size: 1.2rem;
    color: white;
    outline: 1px solid black;
    font-size: 1.2rem;
    height: 4rem;
    cursor: default;
    border: none;
    &&:hover{
        color: black;
        outline: 1px solid grey;
        z-index: 3;
    }
`
const CeroKey = styled.button`
    background-color: #4d4d4d;
    width: 10rem;
    font-size: 1.2rem;
    color: white;
    outline: 1px solid black;
    font-size: 1.2rem;
    height: 4rem;
    cursor: default;
    border: none;
    &&:hover{
        color: black;
        outline: 1px solid grey;
        z-index: 3;
    }
`

const EqualKey = styled.button`
    font-size: 1.2rem;
    color: white;
    outline: 1px solid black;
    font-size: 1.2rem;
    height: 4rem;
    cursor: default;
    border: none;
    background: rgb(0, 68, 102);
    position: absolute;
    height: 8rem;
    width: 5rem;
    bottom: 0.3rem;
    &&:hover{
        color: black;
        outline: 1px solid grey;
        z-index: 3;
    }
`
export const NumberKeyStyled = ({value}) => <NumberKey>{value}</NumberKey>
export const SymbolKeyStyled = ({value}) => <SymbolKey>{value}</SymbolKey>
export const ResetKeyStyled = ({value}) => <ResetKey>{value}</ResetKey>
export const CeroKeyStyled = ({value}) => <CeroKey>{value}</CeroKey>
export const EqualKeyStyled = ({value}) => <EqualKey>{value}</EqualKey>