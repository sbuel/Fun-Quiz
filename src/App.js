import React, { useState } from 'react';

const questions = [
  {
    text: 'Which environment do you thrive in?',
    options: ['Fast-paced', 'Structured', 'Creative']
  },
  {
    text: 'What motivates you most?',
    options: ['Making an impact', 'Achievement', 'Solving problems']
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert('Thank you for completing the quiz!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Career Recommendation App</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].text}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                margin: '10px',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <h2>Thank you for completing the quiz!</h2>
      )}
    </div>
  );
};

export default App;

