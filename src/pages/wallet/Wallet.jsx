import React, { useState } from 'react'
import "./wallet.scss"
export const Wallet = () => {
    const [wallet, setWallet] = useState(true);
  return (
    <div className='wallet-wrapper'>
        <div className="wallet-container">
            <div className="left-part">
                <h5 onClick={()=> setWallet(true)} className={wallet ? 'active' : ''} >My earning</h5>
                {/* <h4>Add Money</h4> */}
                <h5 onClick={()=> setWallet(false)} className={wallet ? '' : 'active'}>Transaction</h5>
            </div>
            {
             wallet ? (
            <>
                <div className="center-part">
                <div className="content">
                    <h3>Total Earning</h3>
                    <h2>₹ 50</h2>
                </div>
                </div>
            <div className="right-part">
                <h4>Add amount</h4>
                <input type="text" placeholder="Your Name" />
                <button>Withdraw</button>
            </div>
            </>
            ) : (
            <>
            <div className="right-part2">
               <div className="transaction-conatiner">
                <div className="left">
                    <h4>English</h4>
                    <p className="date">22/02/23</p>
                </div>
                <div className="right">
                    <h2>₹50</h2>
                </div>
               </div>
            </div>
            </>
            )
        }   
            
        </div>
    </div>
  )
}
