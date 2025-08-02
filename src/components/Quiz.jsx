import { useState } from "react";
import QUESTIONS from "../question.js";

export default function Quiz() {
  const [userAnswers, setUserAnswer] = useState([]);

  const activeQustionIndex = userAnswers.length;
  const shuffledAnswer = QUESTIONS[activeQustionIndex].answers;
  shuffledAnswer.sort((a, b) => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnser) => {
      return [...prevUserAnser, selectedAnswer];
    });
    console.log(userAnswers);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQustionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
