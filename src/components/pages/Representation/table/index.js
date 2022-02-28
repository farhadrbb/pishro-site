import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from "@material-ui/core/TableRow";
import Styles from './index.module.scss'
// import { Box } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    // maxHeight: "120vh",
    '*::-webkit-scrollbar': {
      width: '5px !important',
      transform: 'translateY(10px) !important',
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: 'rgb(236, 236, 236) !important',
      borderRadius: '5px',
    },
    '*::-webkit-scrollbar-thumb': {
      background: 'grey',
      borderRadius: '5px',
    }
  },
  width: {
    "@media (min-width: 0) and (max-width: 767px)": {
      width: "60px !important",
      padding: '5px 3px'
    },
  },
  width30: {
    "@media (min-width: 0) and (max-width: 767px)": {
      width: "30px !important",
      padding: '5px 3px'
    },
    container: {
        // maxHeight: "120vh",
    },
  },
  tableCellCustom : {
    whiteSpace  : "nowrap" ,
    [theme.breakpoints.down("md")]: {
      fontSize : "0.8em" ,
    }
  }
}));




  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#F2F4F6',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default function StickyHeadTable({ columns, rows }) {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const changeRowsPerPage = (event, data) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  const changePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={Styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, ind) => (
                <TableCell
                  key={ind}
                  align={column.id === "phone" ? "right" : "center"}
                  style={{ minWidth: column.minWidth, fontWeight: "bold", textAlign: 'center', whiteSpace: "nowrap" }}
                // width ="50px"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          dir="ltr"
                          className={classes.tableCellCustom}

                        >
                          {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                          {value}
                          {row.internal && column.id === "phone" && (
                            <>
                              <span dir="ltr"> داخلی</span>
                              <span dir="ltr"> {row.internal}</span>
                            </>
                          )}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Box dir="rtl" display="inline-block">
                <TablePagination
                    rowsPerPageOptions={[10, 20, 50]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={changePage}
                    onChangeRowsPerPage={changeRowsPerPage}
                    labelRowsPerPage="تعداد نمایش سطر"
                />
            </Box> */}
    </Paper>
  );
}
