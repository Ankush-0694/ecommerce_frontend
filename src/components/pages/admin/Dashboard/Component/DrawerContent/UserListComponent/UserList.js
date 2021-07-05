import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function UserList({ customerData, serialNo }) {
  const { id, firstName, lastName, email, role } = customerData;

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>{serialNo + 1}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
    </TableRow>
  );
}
