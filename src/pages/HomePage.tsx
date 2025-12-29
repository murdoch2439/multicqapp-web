import "./homePage.style.css"
import {ProgressBar} from "../components/ProgressBar";
import {Choice} from "../components/Choice";
import {useState} from "react";
import {finalResultMessage} from "../utils/finalResultMessage";
import {questions} from "../utils/questions";
import {DIGINCO_WEBSITE_LINK} from "../constants/variables";

import {Footer} from "../components/Footer";
import {translations} from "../utils/translations";



export const HomePage =()=>{

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
    const [language, setLanguage] = useState<'en' | 'fr'>('en')

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

        if (answer === translations[language].questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer(answer);
        setCorrectAnswer(translations[language].questions[currentQuestionIndex].correctAnswer);

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
    const currentQuestion = translations[language].questions[currentQuestionIndex];


    const languageHandler =(language:any)=>{
        setLanguage(language)
    }

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


    const progressPercentage = quizFinished
        ? 100
        : (currentQuestionIndex / totalQuestions) * 100;








    return (
        <div className={"wrapper"}>
            <div className={"header"}>
                <h4 className={"app-name"}>MULTIC-QAPP</h4>

                <select
                    id="language-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
                >
                    <option value="en">English</option>
                    {/*<option value="fr">French</option>*/}
                </select>


            </div>
            <div className={"container"}>
                <div>
                    <ProgressBar progressPercentage={progressPercentage}/>
                    <h1>Test your level in TI!</h1>


                    {!quizFinished &&
                        <p style={{textAlign: 'center', fontSize:12}}>
                            {`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}
                        </p>}

                    {quizFinished ? (
                        <div className={"quiz-result"}>
                            <p>
                                Your score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
                            </p>
                            <p>
                                {finalResultMessage(score, questions.length)}
                            </p>

                            <button className={"btn--medium"} onClick={handleRestartQuiz}>Restart Quiz</button>
                        </div>
                    ) : (
                        <div>
                            {/*<p>{questions[currentQuestionIndex].question}</p>*/}
                            <p>{currentQuestion.question}</p>
                            <div>
                            {
                                    // questions[currentQuestionIndex].answers.map((answer, index) => {
                                    currentQuestion.answers.map((answer, index) => {
                                        let buttonClass = 'answer-button';
                                        // Determine the button's class based on selection and correctness
                                        if (selectedAnswer === answer) {
                                            buttonClass += answer === questions[currentQuestionIndex].correctAnswer ? ' correct' : ' incorrect';
                                        } else if (correctAnswer === answer) {
                                            buttonClass += ' correct'; // Highlight the correct answer
                                        } else {
                                            buttonClass = "answer-button"
                                        }
                                        return (
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

                                                {answer}

                                            </div>

                                        )

                                    })
                                }
                            </div>

                        </div>
                    )}
                </div>

            </div>

            <div className={"footer"}>
               <Footer />
            </div>

        </div>

    );
}
