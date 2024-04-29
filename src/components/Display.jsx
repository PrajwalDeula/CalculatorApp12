import styles from "../components/App.module.css"
const Display = ({displayValue}) =>{
    return(
    
            <input className= {styles.Display} type="text" value={displayValue} readOnly></input>
            
    )

}

export default Display