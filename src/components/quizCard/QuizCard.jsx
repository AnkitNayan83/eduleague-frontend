import React from 'react'
import "./quizCard.scss"
export const QuizCard = (props) => {
    const { subject, startTime, topic, course, isCompleted, creator, entryCoins } = props.quiz;
    const formattedDate = new Date(startTime).toLocaleDateString();
    return (
          <div>
            <div className="card-component">
              <div className="left-side">
                <h4>{subject} Test</h4>
                <h5>Date: {formattedDate}</h5>
                <h5 className="topic">{course}</h5>
      
                <div className="lower-part">
                  <h4>Entry Cost</h4>
                  <h3>₹ {entryCoins}</h3>
                </div>
              </div>
              <div className="right-side">
                <div className="right-block">
                  <h4>{isCompleted ? "Closed" : "Ongoing" }</h4>
                </div>
      
                <h5>Created By { "aman" || creator}</h5>
                <h5 className="topic">Topic - {topic}</h5>
                <div className="lower-part">
                  <h4 className='h3-bottom'>Win upto</h4>
                  <h3 className='h3-bottom'> ₹ 2000</h3>
                </div>
                <div className="btn-container">
                  <div className="btn-join">Join Quiz</div>
                </div>
               
              </div>
            </div>
          </div>
  )
}

