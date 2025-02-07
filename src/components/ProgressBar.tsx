import "./progressBar.style.css"
import {FC} from "react"


type props ={
    progressPercentage:number,
    quizFinished?:boolean
}


















export const ProgressBar:FC<props> = ({progressPercentage}) => {
    return(
        <div className={"progressbar-container"}>
            <div className={progressPercentage < 100 ? "progressbar-step-less-than-hundred" : "progressbar-step"} style={{
                width: `${progressPercentage}%`,
                transition: 'width 0.3s',
            }}></div>
        </div>
    )
}
