import React from 'react'

export const Score = ({marks , mesg}) => {
  return (
    <div className="score">
            <div className="grey-circle"></div>
            <h4>{mesg}</h4>
            <h2>{marks}/10</h2>
    </div>
  )
}
