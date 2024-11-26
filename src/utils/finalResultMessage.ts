export const finalResultMessage=(score:number, totalQuestions:number)=>{
    const totalScoreInPercentage = Math.round((score / totalQuestions) * 100)

    if( totalScoreInPercentage < 50 ){
        return `😔 You still have a lot to learn, keep practicing!`
    }else if( totalScoreInPercentage === 50 ){
        return `🎉 Congratulations! You're have a solid foundation knowledge in computer!`
    }else if( totalScoreInPercentage > 50   ){
        return `🎉 Congratulations! You're crashing the game!`
    }else if( totalScoreInPercentage > 75  ){
        return `🏆 Congratulations! You're a computer expert!`
    }
    else{
        return `🎉 Congratulations! You're a computer expert!`
    }


}
