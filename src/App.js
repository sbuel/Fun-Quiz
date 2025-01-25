import React, { useState } from 'react';

// Example quiz data
const questions = [
  {
    text: 'Which environment do you thrive in?',
    options: ['Fast-paced', 'Structured', 'Creative']
  },
  {
    text: 'What motivates you most?',
    options: ['Making an impact', 'Achievement', 'Solving problems']
  }

  const questions = [
  {
    text: 'Which environment do you thrive in?',
    options: ['Fast-paced', 'Structured', 'Creative']
  },
  {
    text: 'What motivates you most?',
    options: ['Making an impact', 'Achievement', 'Solving problems']
  },
  {
    
];

];

// Example career recommendations
const recommendations = {
  'Fast-paced': 'Professional Athlete',
  Structured: 'Data Scientist',
  Creative: 'Digital Artist',
  'Making an impact': 'Environmental Lawyer',
  Achievement: 'Quantum Physicist',
  'Solving problems': 'Data Scientist'
};

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (answers) => {
    // Simple logic: use the last answer to determine a career
    const lastAnswer = answers[answers.length - 1];
    setResult(recommendations[lastAnswer] || 'Career recommendation unavailable');
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Career Recommendation App</h1>
      {result ? (
        <div>
          <h2>Your Recommended Career:</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007BFF' }}>{result}</p>
          <button
            onClick={restartQuiz}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;

