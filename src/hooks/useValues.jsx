import {useState} from 'react'

const useValues = () => {

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
            formDisplay: `${formDisplay}=${finalResult}`
          };
        });
      };
      
    return [formDisplay, numberDisplay, handleResetDisplay, handleChangeValues, handleFinalResult]
}

export default useValues
