import React, { useEffect } from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import TableHeadPdf from "../../../table/tableHead";




const stylePdf = StyleSheet.create({
  tableBody: {
    width: "100%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "iransans",
  },
  tableRow: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#f2f2f2",
    border:'1px solid white'
  },
  tableCell: {
    width: 80,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 9
  },
  tableCellPrice: {
    width: 60,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  tableCellName: {
    width: 150,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 9,
  },
  tableCellCode: {
    width: 55,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  tableCellTahvil: {
    width: 55,
    minHeight: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 9,
  },
  tableCellDes: {
    width: 470,
    height: "100%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: 10,
    borderRadius: 8,
    fontWeight: "bold",
  },
  tableText: {
    fontSize: 7,
    //   display:'flex',
    //   flexDirection:'row-reverse',
    textAlign: "center",
  },
  tableTextName: {
    fontSize: 7,
    //   display:'flex',
    //   flexDirection:'row-reverse',
    textAlign: "center",
  },
  tableTextDes: {
    width:'100%',
    textAlign:'center',
    fontSize: 7,
    display: "flex",
    flexDirection: "column-reverse",
  },
  info: {
    marginBottom: 5,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const TablePdf = ({
  totalPdf,
  bourseInstruments,
  handleClose,
  open,
  flag,
  setflag,
  mainCategory,
  exmaple,
  index,
  arrayState,
}) => {
  // const hanldeTextdes = () => {
  //   return <Text>{"jsj"}</Text>;
  // };


  return (
    <>
      <TableHeadPdf />
      <View style={stylePdf.tableBody}>
        {bourseInstruments
          ?.filter((data, ins) => ins >= index * 6 && ins < (index + 1) * 6)
          .map((info, index) => (
            <View style={stylePdf.tableRow}>
              <View style={stylePdf.tableCellCode}>
                <Text style={stylePdf.tableText}>{info.bArzehRadifPK}</Text>
              </View>
              <View style={stylePdf.tableCellName}>
                <Text style={stylePdf.tableTextName}>
                  {info.bArzehRadifNamadKala.replaceAll(")"," ").replaceAll("("," ").replaceAll("-"," ")}
                </Text>
              </View>
              <View style={stylePdf.tableCellName}>
                <Text style={stylePdf.tableTextName}>{info.ArzehKonandeh}</Text>
              </View>
              <View style={stylePdf.tableCellDes}>
                {Object.keys(info.text).map((ind)=>(
                <Text style={stylePdf.tableTextDes}>
                    {info.text[ind]}
                </Text>
                ))
                }
              </View>
              <View style={stylePdf.tableCell}>
                <Text style={stylePdf.tableText}>{info.bArzehRadifMaxKharidM}</Text>
              </View>
              <View style={stylePdf.tableCellCode}>
                <Text style={stylePdf.tableText}>{info.bArzehRadifMab}</Text>
              </View>
              <View style={stylePdf.tableCellTahvil}>
                <Text style={stylePdf.tableText}>
                  {info.bArzehRadifTarTahvil}
                </Text>
              </View>
              <View style={stylePdf.tableCellPrice}>
                <Text style={stylePdf.tableText}>
                  {info.bArzehRadifTasviehTypeSharh}
                </Text>
              </View>
              <View style={stylePdf.tableCell}>
                <Text style={stylePdf.tableText}>{info.bArzehRadifMinArzeh}</Text>
              </View>
            </View>
          ))}
      </View>
    </>
  );
};

export default TablePdf;
