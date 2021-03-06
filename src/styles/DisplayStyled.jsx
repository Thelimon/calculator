import styled from "styled-components";

const DisplayContainer = styled.div`
    position: absolute;
    top: 6rem;
    background-color: black;
    width: 20.75rem;
    border: 2px solid #47476b;
    border-bottom: none;
    z-index: 1;
    height: 3.1 rem;
`

const DisplayValuesStyled = styled.div`
    font-size: 1.5rem;
    font-family: digital;
    color: white;
    text-align: right;
    line-height: 2.2rem;
`
const DisplayResultsStyled = styled.div`
    font-size: 1.3rem;
    font-family: digital;
    color: #cf4800;
    text-align: right;
    line-height: 2.2rem;
`

export {DisplayContainer, DisplayValuesStyled, DisplayResultsStyled}