import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Lost } from '../../components/lost/Lost';
import {  Win } from '../../components/win/Win';
import { Score } from '../../components/score/Score';
import "./oneV.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar2 } from '../../components/navbar2/Navbar2';

export const OneV = () => {
  const user = useSelector((state) => state.auth.user);

  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const { quizId } = useParams();

  const handelClick = () => {
    navigate("/");
    window.location.reload(false);
  };
  const marks =7;
  
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.put(`https://eduleague-6le7o.ondigitalocean.app/api/v1/quiz/${quizId}`
        , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
       console.log(response.data); // winner._id
      
       setResponse(response.data);
      //  console.log(user); // user._id
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchQuiz();
  }, [quizId]);


  return (
    <div className="wrapper">
         <Navbar2 pageName={"Result"}/>
  
    <div className='oneV-container'>
   
      <div className="white-box">
        <div className="left-wrap">
        {(user && user?._id === response?.winner?._id) ? <Win winAmount = {response?.quiz?.entryCoins} /> : <Lost winAmount = {response?.quiz?.entryCoins} />}
          {/* render according to result */}
      
          
        </div>
        <div className="righti">
          <div className="right-wrap">
          {response?.sortedParticipants?.length > 0 ? (
            <>
            <Score marks={response?.sortedParticipants[0]?.totalMarks} mesg={"Your Score"}/>
            <div className="div">
               Vs
            </div>
            <Score  marks={response?.sortedParticipants[1]?.totalMarks} mesg={"Opponent Score"}/>
            </>
            )
            : (
              <p>No participants found</p>
            )}
          </div>

          <div className="btn"><button className='btn-result' onClick={handelClick}> Go home </button></div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

