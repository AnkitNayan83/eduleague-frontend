import React from 'react'
import "./result.scss"
export const Result = ({correctAnswer , skipAnswer}) => {
    const totalQuestions = 10;
    const incorrectAnswer = totalQuestions - (correctAnswer + skipAnswer);
    const negativeMarking = 0.5; // Negative marking value for each incorrect answer
    const finalScore = correctAnswer - incorrectAnswer * negativeMarking;
  
  return (
    <div className='result-one'>
        <div className="white-box">
            <h3 className='green1'>Your Quiz is live!</h3>
            <div className="part">
                <div className="purple-box">
                    <h3>Your Score</h3>
                    <h2>{finalScore}/{totalQuestions}</h2>
                </div>

                <div className="right">
                    <div className="upper">
                        <div className="total-question">
                            <div className="lefti">
                                <span className="blue"></span>
                            </div>
                            <div className="righti">
                                <p>10</p>
                                <p className='grey'>Total Question</p>
                            </div>
                        </div>
                        
                        <div className="total-question">
                            <div className="lefti">
                                <span className="green"></span>
                            </div>
                            <div className="righti">
                                <p>{correctAnswer}/10</p>
                                <p className='grey'>Correct Question</p>
                            </div>
                        </div>

                        
                    </div>

                    <div className="upper">
                        <div className="total-question">
                            <div className="lefti">
                                <span className="yellow"></span>
                            </div>
                            <div className="righti">
                                <p>{skipAnswer}/10</p>
                                <p className='grey'>Skipped Question</p>
                            </div>
                        </div>
                        
                        <div className="total-question">
                            <div className="lefti">
                                <span className="red"></span>
                            </div>
                            <div className="righti">
                                <p>{incorrectAnswer}/10</p>
                                <p className='grey'>Incorrect Question</p>
                            </div>
                        </div>

                        
                    </div>

                    <div className='btn-container1'>
                    <button  className="skip btn1">Share</button>
                    <button  className="next btn1">View Result</button>
            </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
