import React, { useState } from 'react';
import { LostAnalysis } from '../../components/lostAnalysis/LostAnalysis';
import { Navbar2 } from '../../components/navbar2/Navbar2';
import { WonAnalysis } from '../../components/wonAnalysis/WonAnalysis';
import './analysis.scss';

export const Analysis = () => {
  const [isWonPageVisible, setIsWonPageVisible] = useState(true);

  const handleWonPageClick = () => {
    setIsWonPageVisible(true);
  };

  return (
    <div className="analysis-container">
      <Navbar2 pageName={'analysis'} />
      <div className="analysis-wrapper">
        <div className="analysis-container2">
          <div className="left-part">
            <div className={isWonPageVisible ? "box won active" : "box won"} onClick={handleWonPageClick}>
              <h3>Won</h3>
              <h5>3</h5>
            </div>
            <div className={isWonPageVisible ? "box loss" : "box loss active"} onClick={()=> setIsWonPageVisible(false)}>
              <h3>Loss</h3>
              <h5>3</h5>
            </div>
          </div>
          <div className="right-part">
            {isWonPageVisible ? <WonAnalysis /> : <LostAnalysis />}
          </div>
        </div>
      </div>
    </div>
  );
};
