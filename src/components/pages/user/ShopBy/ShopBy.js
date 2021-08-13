import React from "react";
import queryString from "query-string";

const ShopBy = (props) => {
  const queryParameter = queryString.parse(props.location.search);
  //   console.log(queryParameter);
  return <h1>Will add it later</h1>;
};

export default ShopBy;
