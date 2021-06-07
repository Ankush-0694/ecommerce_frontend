import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React from "react";

const MyTableContainer = ({ children, component }) => {
  return <TableContainer component={component}>{children}</TableContainer>;
};

const MyTable = ({ children, className, ariaLabel }) => {
  return (
    <Table className={className} aria-label={ariaLabel}>
      {children}
    </Table>
  );
};

const MyTableBody = ({ children }) => {
  return <TableBody>{children}</TableBody>;
};

const MyTableRow = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

const MyTableCell = ({ children, component, scope, align, size }) => {
  return (
    <TableCell component={component} scope={scope} align={align} size={size}>
      {children}
    </TableCell>
  );
};

export { MyTable, MyTableContainer, MyTableRow, MyTableBody, MyTableCell };
