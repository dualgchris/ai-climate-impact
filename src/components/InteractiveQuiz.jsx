import { useState } from "react";
import "../styles.css";

const questions = [
  {
    question: "What is one of the main negative effects of AI mentioned in the text?",
    options: [
      "High water consumption",
      "Low energy usage",
      "Improved data processing",
      "Reduced emissions"
    ],
    answer: "High water consumption",
  },
  {
    question:
      "According to CNBC International, what specific example is given to illustrate the negative environmental impact of AI?",
    options: [
      "Google’s plan to build water-consuming data centers in drought-stricken areas",
      "Using renewable energy in data centers",
      "Investing in solar panels",
      "Developing smart grids"
    ],
    answer:
      "Google’s plan to build water-consuming data centers in drought-stricken areas",
  },
  {
    question:
      "True/False: Training a single AI model can emit as much CO₂ as five cars in their lifetime.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What percentage increase in Google’s global water consumption was noted between 2021 and 2022?",
    options: ["10%", "21%", "30%", "50%"],
    answer: "21%",
  },
  {
    question:
      "Which media source is cited as discussing AI’s role in predicting hazardous disasters and coordinating emergency responses?",
    options: ["CNBC International", "BBC Ideas", "OpenAI", "Nature"],
    answer: "BBC Ideas",
  },
  {
    question:
      "True/False: The article 'Aligning Artificial Intelligence with Climate Change Mitigation' claims that AI has no potential to reduce global emissions.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "What are two ways mentioned in the text that AI can help in addressing climate change?",
    options: [
      "By regulating building energy consumption and predicting hazardous disasters",
      "By increasing water consumption and fossil fuel usage",
      "By reducing renewable energy capacity",
      "By enhancing internet speed and social media engagement"
    ],
    answer:
      "By regulating building energy consumption and predicting hazardous disasters",
  },
  {
    question:
      "True/False: Although both positive and negative impacts of AI on climate change are discussed, many sources lean towards highlighting the benefits of AI.",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question:
      "What challenge is identified regarding how research on AI’s environmental impact is presented?",
    options: [
      "It is presented in highly technical language with difficult word choice",
      "It is too simplistic",
      "It is available only in video format",
      "It is written in a humorous tone"
    ],
    answer:
      "It is presented in highly technical language with difficult word choice",
  },
  {
    question:
      "Why do the researchers call for updated policies in relation to AI and climate change?",
    options: [
      "Because AI has no impact on climate change",
      "Because progress in both climate policy and AI policy is needed along with technological innovation",
      "Because AI is solely for entertainment purposes",
      "Because climate change is not a serious issue"
    ],
    answer:
      "Because progress in both climate policy and AI policy is needed along with technological innovation",
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

  // Calculate progress percentage
  const progressPercent = (current / questions.length) * 100;

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

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }}></div>
      </div>
    </div>
  );
}
