import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard'
import {fetchQuestionsApi,difficulty, QuestionState} from './Api'
import {GlobalStyle, Wrapper} from './App.styles'

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string
  correct: boolean 
  correctAnswer: string
}

const  App: React.FC = ()=> {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

 
  // console.log("loading",loading," GameOver",gameOver)
  const startTrivia = async ()=>{
    setLoading(true)
    setGameOver(false)
    const newQuestion = await fetchQuestionsApi(TOTAL_QUESTIONS,'easy')
    setQuestion(newQuestion)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{
      const answer = e.currentTarget.value;
      console.log(answer)
      const correct = question[number].correct_answer === answer;
      if(correct) setScore(prev => prev + 1)

      const answerObject = {
        question: question[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: question[number].correct_answer
      }
      console.log(answerObject)
      console.log(userAnswer)
      setUserAnswer((prev) => [...prev, answerObject])
  }

  const nextQuestion = ()=>{ 
    const nextQ = number + 1
    if(nextQ === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(ne => ne + 1)
    }
  }



  return (
    <div className="App">
      <GlobalStyle/>
      <Wrapper>
      <h1>Quiz</h1>
      {gameOver || userAnswer.length  === TOTAL_QUESTIONS ? (

      <button className="start"
      onClick={startTrivia}
      > Start </button>
      ) : null}
      {!gameOver && <p className="score">Score:{score}</p>}
      {loading && <p>Loading Questions...</p>}
      
      {!loading && !gameOver &&
        <QuestionCard  
      
        questionNr={number + 1}
        totalQuestion={TOTAL_QUESTIONS}
        question={question[number].question}
        answer={question[number].answer}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
/>
      }
      {
      !gameOver && !loading && userAnswer.length === number + 1
      && number !== TOTAL_QUESTIONS -1 ? (
      <button className="next" onClick={nextQuestion} >
        Next Questions
      </button>

      ): null
      } 
    </Wrapper>
    </div>
  );
}

export default App;


