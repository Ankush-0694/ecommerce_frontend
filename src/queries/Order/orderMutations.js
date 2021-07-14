import { gql } from "@apollo/client";

const ADD_ORDER = gql`
  mutation (
    $productDetailsWithQuantity: [ProductDetailsWithQuantityInput]
    $totalQuantity: Int
    $addressID: ID
    $totalPrice: Int
  ) {
    addOrder(
      productDetailsWithQuantity: $productDetailsWithQuantity
      totalQuantity: $totalQuantity
      addressID: $addressID
      totalPrice: $totalPrice
    ) {
      totalQuantity
      totalPrice
      productDetailsWithQuantity {
        productDetails {
          id
          productName
          productPrice
          productDescription
        }
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

export { ADD_ORDER };
