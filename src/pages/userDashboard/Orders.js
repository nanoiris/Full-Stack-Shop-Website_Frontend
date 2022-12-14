import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { formatPrice } from "../../utils/helpers";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const { row,cancelOrderHandler } = props;
  const [open, setOpen] = React.useState(false);
  const [canceled, setCanceled] = React.useState(row.status === "canceled" ? true : false);
  const cancel = () => {
    cancelOrderHandler(row).then((resp) => {
      console.log("order canceled");
      setCanceled(true);
    });
  };

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row._id}
        </StyledTableCell>
        <StyledTableCell align="left">{formatPrice(row.total)}</StyledTableCell>
        <StyledTableCell align="left">{formatPrice(row.shippingFee)}</StyledTableCell>
        <StyledTableCell align="left">{row.status}</StyledTableCell>
        <StyledTableCell align="left">{row.createdAt}</StyledTableCell>
        <StyledTableCell align="left">
          <Button
            disabled={canceled}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(event, row) => {
              cancel(event, row);
            }}
          >
            Cancel
          </Button>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Subtotal price ($)</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item) => (
                    <StyledTableRow key={item.productId}>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell>{formatPrice(item.price)}</StyledTableCell>
                      <StyledTableCell align="right">{item.quantity}</StyledTableCell>
                      <StyledTableCell align="right">{formatPrice(item.quantity * item.price)}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

export default function Orders({ items, cancelOrderHandler }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Total</StyledTableCell>
            <StyledTableCell align="left">Shipping Fee</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Created At</StyledTableCell>
            <StyledTableCell align="left">Cancel</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <Row key={row.name} row={row} cancelOrderHandler={cancelOrderHandler} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
