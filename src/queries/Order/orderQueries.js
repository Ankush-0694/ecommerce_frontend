import { gql } from "@apollo/client";

const GET_ALL_ORDERS = gql`
  {
    getAllOrders {
      id
      totalQuantity
      totalPrice
      productDetailsWithQuantity {
        productDetails {
          id
          productName
          productPrice
          productDescription
        }
        orderStatus
        deliveredDate
        quantity
      }
      deliveryCharge
      paymentMode
      address {
        id
        fullName
        phoneNumber
        pincode
        state
        city
        HouseNo
        area
        landmark
      }
    }
  }
`;

const GET_SINGLE_ORDER_BY_ID = gql`
  query ($orderID: ID) {
    getOrderById(orderID: $orderID) {
      id
      totalQuantity
      totalPrice
      productDetailsWithQuantity {
        productDetails {
          id
          productName
          productPrice
          productDescription
        }
        orderStatus
        deliveredDate
        quantity
      }
      deliveryCharge
      paymentMode
      address {
        id
        fullName
        phoneNumber
        pincode
        state
        city
        HouseNo
        area
        landmark
      }
    }
  }
`;

export { GET_ALL_ORDERS, GET_SINGLE_ORDER_BY_ID };
