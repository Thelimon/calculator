import Normalize from "react-normalize"
import Display from "../components/Display"
import Numpad from "../components/Numpad"
import { GlobalStyle, MainContainer } from "../styles/MainContainerStyled"


const Calculator = () => {
    return (
        <MainContainer>
            <Normalize />
            <GlobalStyle />
            <Display/>   
            <Numpad />
        </MainContainer>
    )
}

export default Calculator
