import React, { useEffect, useState } from 'react';
import { Navbar2 } from '../../components/navbar2/Navbar2';
import { QuizCard } from '../../components/quizCard/QuizCard';
import './joinQuiz.scss';

export const JoinQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const [selectedQuizType, setSelectedQuizType] = useState('');

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDliYzYwYjg2MzJlY2FjNmMxZDIzYWUiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjg4MTU0MzE0LCJleHAiOjE2ODg0MTM1MTR9.YMcqWXsq0Mi9zPVsPxWNNYz3YYEGibn2OxCvTcycdjg';

    fetch('https://eduleague-6le7o.ondigitalocean.app/api/v1/quiz/get-quizes', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setQuizes(data))
      .catch(error => console.log(error));
      setSelectedQuizType('community');
      // console.log(quizes);
  }, []);

  const handleQuizTypeClick = (quizType) => {
    setSelectedQuizType(quizType);
  };

  return (
    <div className='background'>
      <Navbar2/>
      <div className='join-container'>
        <div className="left-part">
          <h3 className='join-h3'>JOIN QUIZ</h3>
          <p>Join quizzes created by others and earn cash rewards</p>
          <div className="btn-container">
            <button className='btn' onClick={() => handleQuizTypeClick('community')}>Group quiz ＞</button>
            <button className='btn' onClick={() => handleQuizTypeClick('single')}>One on One Quiz ＞</button>
          </div>
        </div>
        <div className="right-part">
          {selectedQuizType === 'single' && (
            <>
              <h4 className='join-h4'>Single Quiz</h4>
              {quizes.singleQuizes && quizes.singleQuizes.map(quiz => (
                <QuizCard key={quiz._id} quiz={quiz} />
              ))}
            </>
          )}
          {selectedQuizType === 'community' && (
            <>
              <h4 className='join-h4'>Community Quiz</h4>
              {quizes.communityQuizes && quizes.communityQuizes.map(quiz => (
                <QuizCard key={quiz._id} quiz={quiz} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}


