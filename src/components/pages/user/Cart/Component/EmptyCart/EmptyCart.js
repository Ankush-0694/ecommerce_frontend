import React from 'react'
import { Link } from 'react-router-dom';
import "./EmptyCart.css"

const EmptyCart = () => {
  return (
    <div>
        <div className="container-fluid mt-80">
            <div className="card">
                <div className="card-body cart">
                    <div>
                        <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130"/>
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <h4>Add something to make me happy :</h4>
                        <Link to="/" className="btn btn-primary cart-btn-transform m-3">continue shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmptyCart;