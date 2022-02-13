import React, { useRef, useState } from "react";
import { MyButtonComponent } from "../../../design/MyButtonComponent";
import { userNavbarStyles } from "../Css/UserNavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import UserNavbarSearchResult from "./UserNavbarSearchResult";
import { GET_PRODUCT_BY_SEARCH_TEXT } from "../../../../queries/Product/productQueries";
import { useLazyQuery } from "@apollo/client";
import { withRouter } from "../../../../helpers/HOC/withRouter";

const UserNavbarSearch = ({ Navigate }) => {
  const classes = userNavbarStyles();

  /** this is to store the searched text */
  const [searchText, setSearchText] = useState("");

  /** this is to check , wheither Query is completed or not
   * Because we can not render Result until query got completed
   */
  const [show, setShow] = useState(false);

  /** use Lazy Query to search on Change
   * Pass a variable searchText and query on backend
   */
  const [
    getProductsBySearchText,
    { error: searchError, loading: searchLoading, data: productData },
  ] = useLazyQuery(GET_PRODUCT_BY_SEARCH_TEXT, {
    onCompleted: (data) => {
      setShow(true);
    },
  });

  /**
   * If we hit enter then we can pass search text as a query in
   *  route and show the result in new Page like /ShopBy/?searchText={searchText}
   */
  const onChange = (e) => {
    setSearchText(e.target.value); // storing  to  pass on ShopBy Page as a query Parameter

    /* If no text then no network call */
    if (e.target.value.trim() === "") {
      return;
    }

    getProductsBySearchText({
      variables: {
        searchText: e.target.value, // prevent network request to whitespaces(because cache will store the result for "")
      },
    });
  };

  return (
    <>
      <input
        type="search"
        onChange={onChange}
        className={classes.searchInput}
        placeholder="Search Product..."
        onBlur={(e) => {
          setShow(false); // when we get out of search box
        }}
        onFocus={() => {
          setShow(true);
        }}
      />

      <MyButtonComponent
        color="secondary"
        variant="contained"
        className={classes.searchIcon}
        onMouseDown={() => {
          if (searchText.trim() === "") return; //don't search if there are only whitespaces
          Navigate(`/ShopBy?q=${searchText}`);
        }}>
        <SearchIcon />
      </MyButtonComponent>

      {/* Show Result only input has something and Query is completed  ,
          Trim will remove the whitespace from string
          Not showing result for whitespaces in search string
       */}
      {searchText.trim() !== "" && show && (
        <UserNavbarSearchResult
          productData={productData}
          searchError={searchError}
          searchLoading={searchLoading}
          searchText={searchText}
        />
      )}
    </>
  );
};

export default withRouter(UserNavbarSearch);
