import {useState} from 'react'

const useValues = () => {

    const [displayValues, setDisplayValues] = useState({
        formDisplay: "",
        numberDisplay: 0,
      });
    
      const { formDisplay, numberDisplay} = displayValues;
    
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
          };
        });
      };
    
      const handleFinalResult = (item) =>{
        setDisplayValues((previousState)=>{
          return{
            ...previousState,
            formDisplay: `${formDisplay}=${eval(formDisplay.toString())}`
          };
        });
      };
      
    return [formDisplay, numberDisplay, handleResetDisplay, handleChangeValues, handleFinalResult]
}

export default useValues
