import React, { Fragment, useEffect, useRef, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../../../../../queries/Product/productQueries";
import { MyTypography } from "../../../../../design/MyTypography";
import ProductListItem from "./ProductListItem";
import ShowError from "../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../layout/LoadingComponent/ShowLoading";
import { MyButtonComponent } from "../../../../../design/MyButtonComponent";
import AllProducts from "../../../../vendor/Product/Component/AllProducts/AllProducts";
import MyDivider from "../../../../../design/MyDivider";

const ProductList = () => {
  const [isMount, setIsMount] = useState(false); // for prevent fetch more call on Mount

  const [limit, setLimit] = useState(5); // max number of products fetch for single query
  const [cursor, setCursor] = useState(null); // for pagination cursor value, set on onClick Load More

  const {
    error: getProductsDataError,
    loading: getProductsDataLoading,
    data: getProductsData,
    fetchMore, // this is to get more products further
  } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      limit: limit,
      cursor: cursor,
    },
    onError: () => {},
  });

  /** 
    on mount - because component did update will call fetch more on mount
    which will be resulted in duplicate data 
  */
  useEffect(() => {
    setIsMount(true);
  }, []);

  /** component did update - if we set the cursor value , this effect will be called
   * We need to call fetchMore in useEffect because setting state is asynchornous function
   */
  useEffect(() => {
    if (isMount && !getProductsDataLoading) {
      fetchMore({
        variables: {
          limit: limit,
          cursor: cursor,
        },
      });
    }
  }, [cursor]);

  if (getProductsDataError) {
    return <ShowError>Error while Fetching Product Data</ShowError>;
  }
  if (getProductsDataLoading) {
    return <ShowLoading />;
  }

  const productData = getProductsData.getAllProducts;

  if (!productData) {
    return <div>No Data Available</div>;
  }

  return (
    <div>
      <div>
        {/* Heading of Products */}
        <MyTypography
          variant="h4"
          component="h5"
          style={{ textAlign: "center", padding: "13px" }}>
          Products
        </MyTypography>

        <MyDivider />

        {/* Product List */}
        <div style={{ maxHeight: "75vh", overflow: "scroll" }}>
          {productData.map((data) => {
            {
              /* return <ProductListItem key={data.id} data={data} />; */
            }
            return (
              <Fragment key={data.id}>
                <AllProducts data={data} role="admin" />
                <MyDivider />
              </Fragment>
            );
          })}
        </div>

        {/* Fetch More  */}
        <div className="load-more-btn-container" style={{ textAlign: "center", padding: "16px 0px"}}>
          <MyButtonComponent
            color="primary"
            variant="contained"
            onClick={() => {
              // by setting cursor value , useEffect will be called

              //Id of the last element should be the new cursor
              const newCursor = productData[productData.length - 1].id;

              setCursor(newCursor); // setting cursor to getting further product
            }}>
            Load More Products..
          </MyButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
