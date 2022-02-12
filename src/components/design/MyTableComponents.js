import { TableHead } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const MyTableContainer = ({ className, children, component }) => {
  return (
    <TableContainer className={className} component={component}>
      {children}
    </TableContainer>
  );
};

const MyTable = ({ stickyHeader, children, className, ariaLabel }) => {
  return (
    <Table
      stickyHeader={stickyHeader ? true : false}
      className={className}
      aria-label={ariaLabel}>
      {children}
    </Table>
  );
};

const MyTableHead = ({ children }) => {
  return <TableHead>{children}</TableHead>;
};

const MyTableBody = ({ children }) => {
  return <TableBody>{children}</TableBody>;
};

const MyTableRow = ({ children }) => {
  return <TableRow>{children}</TableRow>;
};

const MyTableCell = ({ style, children, component, scope, align, size }) => {
  return (
    <TableCell
      component={component}
      scope={scope}
      align={align}
      style={style}
      size={size}>
      {children}
    </TableCell>
  );
};

export {
  MyTable,
  MyTableContainer,
  MyTableRow,
  MyTableBody,
  MyTableCell,
  MyTableHead,
};
