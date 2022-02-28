import {
  Box,
  LinearProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  container: {
    height: "max-content",
  },
  tableCellCustom: {
    whiteSpace: "nowrap",
    width: 200,
    padding: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    }
  },
  noData: {
    width: "90%",
    // height:40,
    fontSize: 20,
    border: "1px solid lightgray",
    margin: "20px auto",
    borderRadius: 5,
    padding: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F2F4F6",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableBourse = ({
  bourseInstruments,
  setRowsPerPage,
  rowsPerPage,
  setPage,
  page,
}) => {
  const classes = useStyles();

  const [stateData, setstateData] = useState([]);

  useEffect(() => {
    setstateData(bourseInstruments);
  }, [bourseInstruments]);

  const changePage = (event, newPage) => {
    setPage(newPage);
  };

  const changeRowsPerPage = (event, data) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLink = (text) => {
  return <div>پیوست</div>
    // return <div dangerouslySetInnerHTML={{ __html: text }}></div>;
  };
  return (
    <>
      <div style={{ height: 5, width: "100%", transform: "translateY(-5px)" }}>
        {bourseInstruments.loading && (
          <LinearProgress style={{ width: "100%", color: "#009A44" }} />
        )}
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, ind) => (
                  <TableCell
                    key={ind}
                    align="center"
                    style={{ width: 160, fontWeight: "bold" }}
                    className="target"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stateData?.data?.map((info, index) => (
                <StyledTableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                  style={{ height: 60 }}
                >
                  {columns.map((cell, ind) => (
                    <TableCell
                      key={ind}
                      align="center"
                      dir="ltr"
                      className={classes.tableCellCustom}
                    >
                      {/* <div dangerouslySetInnerHTML={{__html: `${info.Attachment}`}}></div> */}
                      {ind === 0 ? handleLink(info[cell.id]) : info[cell.id]}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>

          {stateData?.data?.lenght === 0 && (
            <div className={classes.noData}>دیتایی برای نمایش وجو ندارد</div>
          )}
        </TableContainer>

        <Box dir="rtl" display="inline-block">
          <TablePagination
            // rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={bourseInstruments.total}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={changePage}
            rowsPerPageOptions={false}
            row
            // onChangeRowsPerPage={changeRowsPerPage}
            labelRowsPerPage="تعداد نمایش سطر"
          />
        </Box>
      </Paper>
    </>
  );
};

export default TableBourse;

const columns = [
  { id: "Attachment", label: "پیوست", minWidth: 120, align: "center" },
  { id: "cBrokerSpcName", label: "کارگزار", minWidth: 120, align: "center" },
  { id: "bArzehTarArzeh", label: "تاریخ عرضه", minWidth: 120, align: "center" },
  {
    id: "bArzehRadifNamadKala",
    label: "نام کالا",
    minWidth: 120,
    align: "center",
  },

  {
    id: "xKalaNamadKala",
    label: "نماد",
    minWidth: 120,
    align: "left",
    //   format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "xTolidKonandehSharh",
    label: "تولید کننده",
    minWidth: 120,
    align: "right",
    //   format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "ArzehKonandeh",
    label: "عرضه کننده",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toLocaleString('en-US'),
  },
  // {
  //     id: 'areaCode',
  //     label: 'پیش شماره',
  //     minWidth: 170,
  //     align: 'center',
  //     //   format: (value) => value.toLocaleString('en-US'),
  // },
  {
    id: "bArzehRadifMaxKharidM",
    label: "عرضه کالای قابل عرضه",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toFixed(2),
  },
  {
    id: "bArzehRadifMinArzeh",
    label: "حداقل عرضه",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toFixed(2),
  },
  {
    id: "bArzehRadifMab",
    label: "قیمت پایه",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toFixed(2),
  },
  {
    id: "xMahalTahvilSharh",
    label: "مکان تحویل",
    minWidth: 120,
    align: "center",

    //   format: (value) => value.toFixed(2),
  },
  {
    id: "Currency",
    label: "ریال",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toFixed(2),
  },
  {
    id: "Unit",
    label: "واحد",
    minWidth: 120,
    align: "center",
    //   format: (value) => value.toFixed(2),
  },
];
