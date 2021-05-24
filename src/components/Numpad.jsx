import { CeroKeyStyled, EqualKeyStyled, NumberKeyStyled, Pads, ResetKeyStyled, SymbolKeyStyled } from "../styles/PadsContainerStyled"

const Numpad = () => {
    return (
        <>
            <Pads>
                <ResetKeyStyled value="AC"/>
                <SymbolKeyStyled value="/"/>
                <SymbolKeyStyled value="X"/>
                <NumberKeyStyled value="7"/>
                <NumberKeyStyled value="8"/>
                <NumberKeyStyled value="9"/>
                <SymbolKeyStyled value="-"/>
                <NumberKeyStyled value="4"/>
                <NumberKeyStyled value="5"/>
                <NumberKeyStyled value="6"/>
                <SymbolKeyStyled value="+"/>
                <NumberKeyStyled value="1"/>
                <NumberKeyStyled value="2"/>
                <NumberKeyStyled value="3"/>
                <CeroKeyStyled value="0"/>
                <NumberKeyStyled value="."/>
                <EqualKeyStyled value="="/>
            </Pads>                       
        </>
    )
}

export default Numpad
