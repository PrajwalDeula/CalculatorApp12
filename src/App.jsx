import { useState } from "react";
import styles from "../src/components/App.module.css";
import ButtonsContainers from "./components/ButtonsContainers";
import Display from "./components/Display";

function App() {
    let [calVal, setCalVal] = useState("");
    const onButtonClick = (buttonText) =>{
        if(buttonText === "C"){
            setCalVal("");
        }
        else if (buttonText === "="){
            let result = eval(calVal);
                setCalVal(result);
        }

        else{ 
            let newdisplayValue = calVal + buttonText;
            setCalVal(newdisplayValue);

        }


    }
    return(
    <div className={styles.Calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonsContainers onButtonClick={onButtonClick}></ButtonsContainers>
    </div>
    )
}

export default App