import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function UserList({ customerData }) {
  const { id, firstName, lastName, email, role } = customerData;

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
    </TableRow>
  );
}
