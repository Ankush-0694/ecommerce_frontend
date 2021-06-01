import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../../../queries/productQueries";
import ProductReviewForm from "./ProductReviewForm";
import ProductReviews from "./ProductReviews";

const SingleProduct = (props) => {
  const productid = props.match.params.id.split(":")[1];
  console.log(productid);

  const obj = useQuery(getSingleProduct, {
    variables: { id: productid },
  });
  const { loading, error, data } = obj;
  console.log(data);
  //   console.log(data);
  let productData;
  if (!loading) {
    productData = data.product;
  }
  return (
    <div>
      {!loading ? (
        <div>
          <div>
            Name : {productData.productName} , Description :{" "}
            {productData.productDescription} , Price :{" "}
            {productData.productPrice}
          </div>
          <Link to={`/checkout/:${productid}`}>Checkout this Product</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <ProductReviewForm productid={productid} />
      </div>
      <div>
        Auto fetch is not happening
        {!loading ? (
          <ProductReviews reviews={productData.reviews} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
