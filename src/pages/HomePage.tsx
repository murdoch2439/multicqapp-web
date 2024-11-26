import "./homePage.style.css"
import {ProgressBar} from "../components/ProgressBar";
import {Choice} from "../components/Choice";
import {useState} from "react";
import {finalResultMessage} from "../utils/finalResultMessage";

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        question: 'What is the capital of France?',
        answers: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'],
        correctAnswer: 'William Shakespeare',
    },
    // Add more questions as needed
];


export const HomePage =()=>{

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

    const totalQuestions = questions.length;

    // const handleAnswerSelection = (answer: string) => {
    //     setSelectedAnswer(answer);
    // };
    // const handleAnswerSelection = (answer: string) => {
    //     // Check if the selected answer is correct and update the score
    //     if (answer === questions[currentQuestionIndex].correctAnswer) {
    //         setScore(score + 1);
    //     }
    //
    //     // Move to the next question
    //     const nextQuestionIndex = currentQuestionIndex + 1;
    //     if (nextQuestionIndex < totalQuestions) {
    //         setCurrentQuestionIndex(nextQuestionIndex);
    //     } else {
    //         setQuizFinished(true);
    //     }
    // };

    const handleAnswerSelection = (answer: string) => {
        console.log("Answer  ====>", answer)
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        setSelectedAnswer(answer);
        setCorrectAnswer(questions[currentQuestionIndex].correctAnswer);

        // Move to the next question after a brief delay
        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < totalQuestions) {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedAnswer(null); // Reset selected answer for the next question
                setCorrectAnswer(null); // Reset correct answer for the next question
            } else {
                setQuizFinished(true);
            }
        }, 1000); // Change question after 1 second
    };

    // const handleNextQuestion = () => {
    //     if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    //         setScore(score + 1);
    //     }
    //     setSelectedAnswer(null);
    //     const nextQuestion = currentQuestionIndex + 1;
    //     if (nextQuestion < questions.length) {
    //         setCurrentQuestionIndex(nextQuestion);
    //     } else {
    //         setQuizFinished(true);
    //     }
    // };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizFinished(false);
        setSelectedAnswer(null);
    };

    // const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    // const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
    const progressPercentage = quizFinished
        ? 100
        : (currentQuestionIndex / totalQuestions) * 100;


    return(
        <div className={"container"}>
            <div>

                <ProgressBar progressPercentage={progressPercentage} />
                <h1>Test your level in TI!</h1>
                {/*<p>What is the name of the computer created in 1985?</p>*/}
                {/*<Choice/>*/}
                {/*<Choice/>*/}
                {/*<Choice/>*/}

                    {/*<p style={{textAlign: 'center'}}>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</p>*/}
                {!quizFinished &&
                    <p style={{textAlign: 'center'}}>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</p>}


                {quizFinished ? (
                    <div>
                        <p>Your score: {score} / {questions.length} ({Math.round((score/questions.length)*100)}%)</p>
                        <p>{finalResultMessage(score, questions.length )}</p>
                        {/*<p>🎉 Congratulations! You're a computer expert!</p>*/}

                        <button className={"btn--medium"} onClick={handleRestartQuiz}>Restart Quiz</button>
                    </div>
                ) : (
                    <div>
                        <p>{questions[currentQuestionIndex].question}</p>
                        <div>
                            {
                                questions[currentQuestionIndex].answers.map((answer, index) => {
                                let buttonClass = 'answer-button';
                                // Determine the button's class based on selection and correctness
                                if (selectedAnswer === answer) {
                                    buttonClass += answer === questions[currentQuestionIndex].correctAnswer ? ' correct' : ' incorrect';
                                } else if (correctAnswer === answer) {
                                    buttonClass += ' correct'; // Highlight the correct answer
                                }else{
                                    buttonClass="answer-button"
                                }
                                return(
                                <div
                                    key={index}
                                    // className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
                                    className={buttonClass}
                                    // onChange={() => {
                                    //     handleAnswerSelection(answer)
                                    // }}
                                    onClick={() =>
                                        handleAnswerSelection(answer)
                                    }
                                >
                                    {/*<label>*/}
                                    {/*    <input*/}
                                    {/*        type="radio"*/}
                                    {/*        value={answer}*/}
                                    {/*        checked={selectedAnswer === answer}*/}
                                    {/*        onChange={() => handleAnswerSelection(answer)}*/}
                                    {/*    />*/}
                                        {answer}
                                    {/*</label>*/}
                                </div>
                            )})
                            }
                        </div>
                        {/*<button onClick={handleNextQuestion} disabled={!selectedAnswer}>*/}
                        {/*    Next Question*/}
                        {/*</button>*/}
                    </div>
                )}
            </div>


        </div>

    )
}
