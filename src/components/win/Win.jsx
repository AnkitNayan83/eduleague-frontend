import React from 'react'
import "./win.scss"
export const Win = ({winAmount}) => {

  return (
    <div className="result-wrap"> 
    <h3>Won challenge!</h3>
    <h4 className='green'>You have Won + {winAmount} </h4>
    <div className="img-wrapper wini">
      <img src="/images/Layer.png" alt="" />
    </div>
    
</div>
  )
}

