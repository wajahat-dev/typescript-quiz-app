import QuestionCard from "./components/QuestionCard";
import { shuffleArray } from "./utils";


type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type difficulty = "easy" | "medium" | "hard";

export type QuestionState = Question & { answer: string[] };

export const fetchQuestionsApi = async (amount: number, difficulty: difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  const result = data.results.map((question: Question) => ({
      ...question,
      answer: shuffleArray([...question.incorrect_answers,question.correct_answer])
    }));

    return result
    
};


