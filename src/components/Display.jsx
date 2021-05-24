import React, {useState} from 'react'
import { DisplayContainer, DisplayValuesStyled } from '../styles/DisplayStyled';

const Display = () => {

    const [display, setDisplay] = useState({
        formDisplay : "",
        result: 0
    });

    const {formDisplay, result} = display;

    return (
        <DisplayContainer>
            <DisplayValuesStyled>{`${formDisplay}`}</DisplayValuesStyled>
            <DisplayValuesStyled>{`${result}`}</DisplayValuesStyled>
        </DisplayContainer>
    )
}

export default Display
