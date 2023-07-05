import React from 'react'
import './lost.scss'
export const Lost = ({winAmount}) => {
  return (
    <div className="result-wrap"> 
    <h3 className='h3'>Lost challenge!</h3>
    <h4 className='red'> You have Lost - {winAmount}, Better Luck next time </h4>
    <div className="img-wrapper losti">
      <img src="/images/grp1.png" alt="img" />
    </div>
    
</div>
  )
}

