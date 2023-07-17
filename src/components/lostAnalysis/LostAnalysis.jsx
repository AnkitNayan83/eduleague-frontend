import React from 'react'
import "./lostAnalysis.scss"
export const LostAnalysis = () => {
  return (
    <div className="w-box">
    <div className="first center">
        <h3>Biology Test</h3>
        <p>Date : 25/02/23</p>
    </div>
    <div className="second center">
        <div className="you">
            <img src="./images/prof.png" alt="" />
            <h5>You</h5>
        </div>
        <div className="vs">Vs</div>
        <div className="opp">
            <img src="./images/prof.png" alt="" />
            <h5>Riya</h5>
        </div>
    </div>
    <div className="third center red">
            Lost ₹10
    </div>
</div>
  )
}
