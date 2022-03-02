import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ORDERS_BY_VENDOR_ID } from '../../../../queries/Order/orderQueries'
import ShowError from '../../../layout/ErrorComponent/ShowError';
import ShowLoading from '../../../layout/LoadingComponent/ShowLoading';
import TrackSingleOrder from './Components/TrackSingleOrder';
import "./CSS/track-order.css"


const TrackOrders = () => {
    const {
        error : getVendorOrderError, 
        loading : getVendorOrderLoading , 
        data : getVendorOrderData
    } = useQuery(GET_ORDERS_BY_VENDOR_ID);

    if(getVendorOrderError){
        return <ShowError>Some Error Occurred</ShowError>
    }

    if(getVendorOrderLoading){
        return <ShowLoading />
    }

    const dataToRender = getVendorOrderData.getOrdersByVendorIdOfProduct;
    

    // console.log({dataToRender})
    return (
        <div>
            <h3 className='main-heading'>Total Orders : {dataToRender.length}</h3>
            {dataToRender.map((singleOrder,index)=>{
                return <TrackSingleOrder key={index} getVendorOrderData={singleOrder}/>
            })}
        </div>
    )
}

export default TrackOrders