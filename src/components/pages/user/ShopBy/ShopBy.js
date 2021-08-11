import React from "react";
import queryString from "query-string";

const ShopBy = (props) => {
  const queryParameter = queryString.parse(props.location.search);
  //   console.log(queryParameter);
  return <div>Will add it later</div>;
};

export default ShopBy;
