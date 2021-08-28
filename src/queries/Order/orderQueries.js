import { gql } from "@apollo/client";

const GET_ALL_ORDERS = gql`
  {
    getAllOrders {
      id
      customerId
      totalQuantity
      totalPrice
      orderedDate
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
    getOrderByOrderId(orderID: $orderID) {
      id
      customerId
      totalQuantity
      totalPrice
      orderedDate
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

const GET__ORDERS_BY_CUSTOMERID = gql`
  query {
    getOrdersByCustomerId {
      id
      customerId
      totalQuantity
      totalPrice
      orderedDate
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

export { GET_ALL_ORDERS, GET_SINGLE_ORDER_BY_ID, GET__ORDERS_BY_CUSTOMERID };
