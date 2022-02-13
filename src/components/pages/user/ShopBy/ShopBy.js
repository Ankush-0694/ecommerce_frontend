import React, { useState } from "react";
import queryString from "query-string";
import { GET_PRODUCT_BY_SEARCH_TEXT } from "../../../../queries/Product/productQueries";
import { useQuery } from "@apollo/client";
import ShowError from "../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../layout/LoadingComponent/ShowLoading";
import Products from "../Products/AllProducts/Products";
import MyDivider from "../../../design/MyDivider";
// import { MyPaper } from "../../../Design/MyPaper";
import ProductFilter from "./Component/ProductFilter";
import { ShopByStyles } from "./CSS/ShopByStyles";
import { withRouter } from "../../../../helpers/HOC/withRouter";

const ShopBy = (props) => {
  const classes = ShopByStyles();
  const { location } = props;
  const queryParameter = queryString.parse(location.search);

  const searchText = queryParameter.q;

  const [selectedRating, setSelectedRating] = useState();

  const {
    error: searchError,
    loading: searchLoading,
    data: productData,
  } = useQuery(GET_PRODUCT_BY_SEARCH_TEXT, {
    variables: {
      searchText: searchText,
    },
    fetchPolicy: "cache-first", //may already fetched when we were entering search text
  });

  if (searchError) {
    return <ShowError>Error</ShowError>;
  }

  if (searchLoading) {
    return <ShowLoading />;
  }

  const dataToRender = productData.getProductsBySearchText;

  if (dataToRender.length === 0) {
    return <h1>No Product Found</h1>;
  }

  const onFilterChange = (e) => {
    let value = Number(e.target.value);
    setSelectedRating(value);
  };

  return (
    <div>
      {/* This component comes from product/AllProducts which further use productCard to show the content */}

      <div className={classes.shopByHeader}>
        Showing Results For - "{searchText}" ( {dataToRender.length} Items
        Found)
      </div>

      <MyDivider />

      <div className="products" style={{ display: "flex" }}>
        {/* Filter Component */}

        <div className="filter" style={{ margin: "16px 24px 0 16px" }}>
          <ProductFilter onFilterChange={onFilterChange} />
        </div>

        {/* Filter List  */}

        <div className="productData" style={{ width: "80%" }}>
          <div>
            <Products
              selectedRating={selectedRating}
              productData={dataToRender}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ShopBy);
