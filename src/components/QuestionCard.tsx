import React from 'react';
import {AnswerObject} from '../App'
import {Wrapper,ButtonWrapper } from './QuestionCard.styles'
type props = {
    question: string
    answer: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQuestion: number
}

const QuestionCard: React.FC<props> = ({ 
    question, answer,
     callback, userAnswer, 
     questionNr, totalQuestion }) => {
    return (
        <Wrapper>
            <p className="number">Question: 
                {questionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answer.map((answer,ind) => (
                    <div  key={ind}
                    // correct={userAnswer?.correctAnswer === answer}
                    >
                        <button  disabled={userAnswer ? true : false}
                        onClick={callback}
                        value={answer}
                        >
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </div >
                ))}
            </div>

        </Wrapper> 
    );
}

export default QuestionCard;


