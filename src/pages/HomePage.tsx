import "./homePage.style.css"
import {ProgressBar} from "../components/ProgressBar";
import {Choice} from "../components/Choice";
export const HomePage =()=>{
    return(
        <div className={"container"}>
            <div>

                <ProgressBar/>
                <h2>Test your level in TI!</h2>
                <p>What is the name of the computer created in 1985?</p>
                <Choice/>
                <Choice/>
                <Choice/>
            </div>


        </div>

    )
}
