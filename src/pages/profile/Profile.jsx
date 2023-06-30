import React from 'react'
import "./profile.scss"
export const Profile = () => {
  return (
<div className='wallet-wrapper'>
        <div className="wallet-container">
            <div className="left-part">
               <h4>Basic Information</h4>
            </div>
            <>
            <div className="right-part2">
               <div className="img-wrappper">
                <img src="./images/prof.png" alt="" />
               </div>
                <div className="info-tab">
                        <div className="content">
                          <h4>First Name</h4>
                        <input type="text" placeholder='Enter your First Name' />
                        </div>
                        <div className="content">
                        <h4>Last Name</h4>
                        <input type="text" placeholder='Enter your Last Name' />
                        </div>

                        <div className="content">
                        <h4>Phone Number</h4>
                        <input type="text" placeholder='Enter your Phone no.' />
                        </div>

                        <div className="btn-wrapper">
                          <button className="btn">Save Changes</button>
                        </div>
                </div>
            </div>
          </>             
        </div>
    </div>
  )
}
