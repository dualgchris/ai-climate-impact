import { useState } from "react";

const questions = [
  {
    question: "How much CO₂ does training a large AI model emit?",
    options: ["Same as a car in 1 year", "Same as 5 cars in their lifetime", "Zero emissions"],
    answer: "Same as 5 cars in their lifetime",
  },
  {
    question: "Which AI application helps reduce climate change?",
    options: ["AI Chatbots", "Smart Grids", "Facial Recognition"],
    answer: "Smart Grids",
  },
];

export default function InteractiveQuiz() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  return (
    <div className="container">
      {current < questions.length ? (
        <>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)} className="btn">
              {option}
            </button>
          ))}
        </>
      ) : (
        <h2>Your Score: {score}/{questions.length}</h2>
      )}
    </div>
  );
}
