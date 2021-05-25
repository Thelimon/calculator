import React, { useState } from "react";
import { DisplayContainer, DisplayValuesStyled } from "../styles/DisplayStyled";
import {CeroKey, EqualKey, NumberKey, Pads, ResetKey, SymbolKey} from "../styles/PadsContainerStyled";

const Display = () => {
  
  const [displayValues, setDisplayValues] = useState({
    formDisplay: "",
    numberDisplay: 0,
    finalResult: 0,
  });

  const { formDisplay, numberDisplay, finalResult } = displayValues;

  const handleResetDisplay = () => {
    setDisplayValues({
      formDisplay: " ",
      numberDisplay: 0,
    });
  };

  const handleChangeValues = (item) => {
    setDisplayValues((previousState) => {
      return {
        ...previousState,
        formDisplay: `${formDisplay + item}`,
        numberDisplay: item,
        finalResult: "wait"
      };
    });
  };

  const handleFinalResult = (item) =>{
    setDisplayValues((previousState)=>{
      return{
        ...previousState,
        formDisplay: `${formDisplay}=${finalResult }`
      };
    });
  };

  return (
    <DisplayContainer>
      <DisplayValuesStyled>{`${formDisplay}`}</DisplayValuesStyled>
      <DisplayValuesStyled>{`${numberDisplay}`}</DisplayValuesStyled>
      <Pads>
        <ResetKey
          onClick={(item) => {
            handleResetDisplay();
          }}
        > AC </ResetKey>

        <SymbolKey
          onClick={(item) => {
            handleChangeValues("/");
          }}
        > / </SymbolKey>

        <SymbolKey
          onClick={(item) => {
            handleChangeValues("X");
          }}> X </SymbolKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(9);
          }}> 7 </NumberKey>
        
        <NumberKey
          onClick={(item) => {
            handleChangeValues(8);
          }}> 8 </NumberKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(9);
          }}> 9 </NumberKey>
        <SymbolKey
          onClick={(item) => {
            handleChangeValues("-");
          }}
        > - </SymbolKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(4);
          }}
        > 4 </NumberKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(5);
          }}
        >  5 </NumberKey>
        <NumberKey
          onClick={(item) => {
            handleChangeValues(6);
          }}
        > 6 </NumberKey>

        <SymbolKey
          onClick={(item) => {
            handleChangeValues("+");
          }}
        >  + </SymbolKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(1);
          }}
        > 1 </NumberKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(2);
          }}
        > 2 </NumberKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(3);
          }}
        > 3 </NumberKey>

        <CeroKey
          onClick={(item) => {
            handleChangeValues("0");
          }}
        > 0 </CeroKey>

        <NumberKey
          onClick={(item) => {
            handleChangeValues(".");
          }}
        > . </NumberKey>
        <EqualKey
          onClick={(item) =>{
            handleFinalResult();
          }}
        > = </EqualKey>
      </Pads>
    </DisplayContainer>
  );
};

export default Display;
