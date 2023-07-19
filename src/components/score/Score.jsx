import React from 'react'

export const Score = ({marks , mesg, url}) => {
  return (
    <div className="score">
            <div className="grey-circle">
              <img src= {`/images/${url}.png`} alt="img" />
            </div>
            <h4>{mesg}</h4>
            <h2>{marks}/10</h2>
    </div>
  )
}
