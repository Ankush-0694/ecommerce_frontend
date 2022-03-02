import React from 'react'
import ImageComponent from '../../../../design/ImageComponent';
import { MyButtonComponent } from '../../../../design/MyButtonComponent';
import "../CSS/track-order.css"

const TrackSingleOrder = (props) => {
    const { getVendorOrderData } = props;

    const {
        orderId, productId , productName , productPrice, productImageUrl, productDescription,
        orderedDate, quantity, orderStatus, deliveredDate, customerId 
    } = getVendorOrderData;

    let orderedDateFormatted = new Date(Number(orderedDate)).toDateString();

    // console.log({orderId, productId})

    
    return (
        <div className="container">
            <div className='left-part'>
                <ImageComponent width="200" height="200" className="product-img" src={productImageUrl} alt={productName} />
            </div>
            <div className='right-part'>
                <div>Order ID : {orderId}</div>
                {/* <hr></hr> */}
                <div>Customer Name : {customerId}</div>

                <div>Product Name : {productName}</div>
                {/* <hr></hr> */}
                <div>Product Description : {productDescription}</div>
                {/* <hr></hr> */}
                <div>Product Price : {productPrice}</div>

                <div>Order Date : {orderedDateFormatted}</div>

                <div>Current Order Status : {orderStatus} </div>

                <div>Quantity : {quantity}</div>

                <div>Total Price : {productPrice*quantity}</div>

                <div className='button-grp'>
                    <div>
                        <MyButtonComponent variant="outlined" color="primary" size="small">
                            Change Order Status
                        </MyButtonComponent>
                    </div>

                    {/* <div>
                        <MyButtonComponent disabled={true} variant="outlined" color="primary" size="small">
                            Assign Delivery Partner
                        </MyButtonComponent>
                    </div> */}
                </div>

                

            </div>
           
        </div>
    )
}

export default TrackSingleOrder;