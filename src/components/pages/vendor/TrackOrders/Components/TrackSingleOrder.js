import React from 'react'
import ImageComponent from '../../../../design/ImageComponent';
import { MyButtonComponent } from '../../../../design/MyButtonComponent';
import "../CSS/track-order.css"

const TrackSingleOrder = (props) => {
    const {getVendorOrderData} = props;
    const {orderId, productId , productName , productPrice, productImageUrl, productDescription} = getVendorOrderData;

    // console.log({orderId, productId})
    return (
        <div className="container">
            <div className='left-part'>
                <ImageComponent width="200" height="200" className="product-img" src={productImageUrl} alt={productName} />
            </div>
            <div className='right-part'>
                <div>Order ID : {orderId}</div>
                {/* <hr></hr> */}
                <div>Product Name : {productName}</div>
                {/* <hr></hr> */}
                <div>Product Description : {productDescription}</div>
                {/* <hr></hr> */}
                <div>Product Price : {productPrice}</div>

                <div>Order Date : </div>

                <div>Current Order Status : </div>

                <div>
                    <MyButtonComponent variant="outlined" color="primary" size="small">
                        Change Order Status
                    </MyButtonComponent>
                </div>

            </div>
           
        </div>
    )
}

export default TrackSingleOrder;