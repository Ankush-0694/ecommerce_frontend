import React, { useState } from "react";
import { MyButtonComponent } from "../../../Design/MyButtonComponent";
import { userNavbarStyles } from "../Css/UserNavbarStyles";
import SearchIcon from "@material-ui/icons/Search";
import UserNavbarSearchResult from "./UserNavbarSearchResult";

const UserNavbarSearch = () => {
  const classes = userNavbarStyles();
  const [searchText, setSearchText] = useState("");

  /** use Lazy Query to search on Change
   * Pass a variable searchText and query on backend
   */

  /**
   * If we hit enter then we can pass search text as a query in route and show the result in new Page like /search/?searchText={searchText}
   */

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        onChange={onChange}
        className={classes.searchInput}
        placeholder="Search Product..."
      />

      <MyButtonComponent
        color="primary"
        variant="contained"
        className={classes.searchIcon}>
        <SearchIcon />
      </MyButtonComponent>

      {searchText !== "" && <UserNavbarSearchResult />}
    </>
  );
};

export default UserNavbarSearch;
