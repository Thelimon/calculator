import Normalize from "react-normalize"
import Display from "../components/Display"
import { GlobalStyle, MainContainer } from "../styles/MainContainerStyled"


const Calculator = () => {
    return (
        <MainContainer>
            <Normalize />
            <GlobalStyle />
            <Display/>   
        </MainContainer>
    )
}

export default Calculator
