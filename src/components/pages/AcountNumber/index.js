import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Layout from "../../../layout";
import Table from "./table";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes as actionTypesAcc } from "../../../redux/accounts/select_acounts";

const useStyles = makeStyles((theme) => ({
  title: {
    // textAlign: "center",
  },
  box: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  text: {
    fontSize: theme.fontSize.xLarge,
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      // margin: 'auto',
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  svg: {
    width: 17,
    height: 17,
    display: "block",
    margin: "auto",
    position: "absolute",
    bottom: -30,
    right: "calc(56% - 8.5px)",
    fill: theme.palette.light.type2,
    [theme.breakpoints.down("sm")]: {
      right: "calc(50% - 8.5px)",
      left: "auto!important",
    },
  },
  bottomRight: {
    left: 0,
  },
  // bottomCenter: {
  //     right: "calc(50% - 8px)",
  // },
  centerRight: {
    top: 9,
    left: -20,
  },
  gridTable: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  gridLayoutTable: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "98%",
    },
  },
}));

const Index = ({ deleteLayout }) => {
  const stateReducerAccounts = useSelector(
    (state) => state.accounts_select_reducer
  );
  const [state, setState] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypesAcc.selectAccountsAync });
  }, []);
  useEffect(() => {
    if (stateReducerAccounts.data.length !== 0) {
      setState(JSON.parse(stateReducerAccounts?.data[0]?.body.content));
    }
  }, [stateReducerAccounts]);

  return (
    <>
      {!deleteLayout && (
        <Layout>
          <Box margin="100px auto" className={classes.gridLayoutTable}>
            <Table
              columns={columns}
              state={state}
              stateReducerAccounts={stateReducerAccounts}
            />
            {/* <NewTable columns={columns} rows={rows}/>          */}
          </Box>
        </Layout>
      )}
    </>
  );
};

export default Index;

const columns = [
  { id: "bank", label: "بانک", minWidth: 170, align: "center" },
  { id: "bank", label: "شعبه", minWidth: 170, align: "center" },
  { id: "acountNumber", label: "شماره حساب", minWidth: 170, align: "center" },
  { id: "shaba", label: "شبا", minWidth: 170, align: "center" },
];
//
// let rows = [
//   {
//     title: "بورس اوراق بهادار",
//     child: [
//       {
//         bank: "ملی",
//         branch: "بورس اوراق بهادر",
//         acountNumber: "0105639913000",
//         shaba: " IR92 0170 0000 0010 5639 9130 00",
//       },
//       {
//         bank: "سامان",
//         branch: "سی تیر",
//         acountNumber: "849-40-50440-1",
//         shaba: "IR61 0560 0849 0400 0050 4400 01",
//       },
//       {
//         bank: "ملت",
//         branch: "حافظ بورس",
//         acountNumber: "21431285.29",
//         shaba: "IR94 0120 0000 0000 2143 1285 29",
//       },
//       {
//         bank: "پارسیان",
//         branch: "آپادانا",
//         acountNumber: "20100429598604",
//         shaba: "IR39 0540 1055 2010 0429 5986 04",
//       },
//       {
//         bank: "تجارت",
//         branch: "تخصصی بورس",
//         acountNumber: "104350186",
//         shaba: "IR26 0180 0000 0000 0104 3501 86",
//       },
//       {
//         bank: "شهر",
//         branch: "دولت",
//         acountNumber: "1001000532914",
//         shaba: "IR57 0610 0000 0100 1000 5329 14",
//       },
//       {
//         bank: "دی",
//         branch: "میدان ونک",
//         acountNumber: "105505176005",
//         shaba: "IR09 0660 0000 0010 5505 1760 05",
//       },
//     ],
//   },
//   {
//     title: "بورس انرژی",
//     child: [
//       {
//         bank: "ملت",
//         branch: " بورس کالا",
//         acountNumber: "9515867211",
//         shaba: "IR440120000000009515867211",
//       },
//     ],
//   },
//   {
//     title: "بورس کالا",
//     child: [
//       {
//         bank: "ملت",
//         branch: " بورس کالا",
//         acountNumber: "88099077",
//         shaba: "IR220120000000000088099077",
//       },
//       {
//         bank: "تجارت",
//         branch: "تخصصی بورس",
//         acountNumber: "0104350208",
//         shaba: "IR140180000000000104350208",
//       },
//       {
//         bank: "اقتصاد نوین",
//         branch: "سهروردی شمالی",
//         acountNumber: "114-2-25534-1",
//         shaba: "IR320550011400200025534001",
//       },
//       {
//         bank: "صادرات",
//         branch: " بورس کالا",
//         acountNumber: "0103469615003",
//         shaba: "IR640190000000103469615003",
//       },
//     ],
//   },
// ];
