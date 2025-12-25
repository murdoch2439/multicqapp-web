export const finalResultMessage=(score:number, totalQuestions:number)=>{
    const totalScoreInPercentage = Math.round((score / totalQuestions) * 100)
    if( totalScoreInPercentage === 100  ){
        return `🏆 Congratulations! You're a computer expert!`
    }if( totalScoreInPercentage >= 75  ){
        return `🏆 Congratulations! You're a computer expert!`
    } if( totalScoreInPercentage === 50 ){
        return `🎉 You have a solid foundation knowledge you can improve on!`
    } if( totalScoreInPercentage > 50   ){
        return `🎉 Congratulations! You're crashing the game!`
    }if( totalScoreInPercentage < 50 ){
        return `😔 You still have a lot to learn, keep practicing!`
    }
    else{
        return `🎉 Congratulations! You're a computer expert!`
    }
}

