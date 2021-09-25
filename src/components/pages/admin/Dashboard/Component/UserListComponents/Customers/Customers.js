import React from "react";
import UserList from "../UserTableBody/UserTableBody";
import { makeStyles } from "@material-ui/core/styles";
import { MyTypography } from "../../../../../../design/MyTypography";
import { MyPaper } from "../../../../../../design/MyPaper";
import { useQuery } from "@apollo/client";
import {
  MyTableContainer,
  MyTable,
  MyTableHead,
  MyTableBody,
  MyTableCell,
  MyTableRow,
} from "../../../../../../design/MyTableComponents";
import { GET_ALL_USERS_BY_ROLE } from "../../../../../../../queries/user/userQueries";
import ShowError from "../../../../../../layout/ErrorComponent/ShowError";
import ShowLoading from "../../../../../../layout/LoadingComponent/ShowLoading";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const Customers = () => {
  const classes = useStyles();

  const {
    error: getAllUsersError,
    loading: getAllUsersLoading,
    data: AllUsersData,
  } = useQuery(GET_ALL_USERS_BY_ROLE, {
    variables: { role: "customer" },
  });

  if (getAllUsersError) {
    return <ShowError>Error while fetching customers</ShowError>;
  }
  if (getAllUsersLoading) {
    return <ShowLoading />;
  }

  const dataToRender = AllUsersData.getAllUsersByRole;

  // these specify the columns of the table
  const columns = [
    { id: "SNo.", label: "S.No.", minWidth: 170 },
    { id: "firstname", label: "FirstName", minWidth: 170 },
    { id: "lastname", label: "LastName", minWidth: 170 },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
    },
    {
      id: "role",
      label: "Role",
      minWidth: 170,
    },
  ];

  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px 0px" }}>
        <MyTypography variant="h3" component="h2">
          Customers
        </MyTypography>
      </div>

      <div style={{ padding: "0px 16px" }}>
        <MyPaper className={classes.root}>
          <MyTableContainer className={classes.container}>
            <MyTable stickyHeader aria-label="sticky table">
              <MyTableHead>
                <MyTableRow>
                  {columns.map((column) => (
                    <MyTableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "bolder",
                      }}>
                      {column.label}
                    </MyTableCell>
                  ))}
                </MyTableRow>
              </MyTableHead>
              <MyTableBody>
                {dataToRender.map((customer, index) => {
                  return (
                    <UserList
                      key={customer.id}
                      customerData={customer}
                      serialNo={index}
                    />
                  );
                })}
              </MyTableBody>
            </MyTable>
          </MyTableContainer>
        </MyPaper>
      </div>
    </div>
  );
};

export default Customers;
