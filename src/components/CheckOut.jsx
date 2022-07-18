import React from 'react'
import './CheckOut.css'
import {useNavigate} from 'react-router-dom'

const CheckOut = () => {
    const navigate = useNavigate();
  return (
    <div id='container'>
        <div className="left">
            <div className="billing">
                <h3>Billing Details</h3>
                <div className="field">
                    <h4>Full Name: </h4>
                    <input type='text'/>
                </div>
                <div className="field">
                    <h4>Email address: </h4>
                    <input type="email"/>
                </div>
                <div className="field">
                    <h4>Country: </h4>
                    <input type="text"/>
                </div>
                <div className="field">
                    <h4>State/UT: </h4>
                    <input type="text"/>
                </div>
                <div className="field">
                    <h4>Zip/Postal Code: </h4>
                    <input type="text"/>
                </div>
                <div className="field">
                    <h4>Residential address: </h4>
                    <textarea type="text"/>
                </div>
            </div>
            <div className="payment">
                <h3>Payment Details</h3>
                <div className="field">
                    <h4>Card Number: </h4>
                    <input type="number"/>
                </div>
                <div className="field">
                    <h4>Exp Date: </h4>
                    <input type="text"/>
                </div>
                <div className="field">
                    <h4>Security Code: </h4>
                    <input type="number" placeholder='Three digits'/>
                </div>
                <button onClick={() => {
                    alert('Your Order has been placed')
                    navigate('/')
                }}>Place Order</button>
            </div>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default CheckOut