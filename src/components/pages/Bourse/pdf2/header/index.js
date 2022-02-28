import React from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import TablePdf from "./table";
import { dateMiladiToShamsi } from "../../../../method/date";

const stylePdf = StyleSheet.create({
  // root: {
  //   fontFamily: "iransans",
  // },
  view: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  boxHeader: {
    width: "100%",
    height: 50,
    backgroundColor: "#3b945e",
    borderRadius: 9,
    marginTop: 2,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boxParent: {
    display: "flex",
    flexDirection: "row",
    width: 250,
  },
  boxTitle: {
    width: 170,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#f2f2f2",
    marginRight: 15,
    fontSize:12,
    display:'felx',
    justifyContent:'center',
    alignItems:'center'
  },
  boxText: {
    color: "#f2f2f2",
  },
  h: {
    color: "#f2f2f2",
  },
  boxFooter: {
    width: "100%",
    height: 30,
    backgroundColor: "#068b78",
    borderRadius: 9,
    color: "white",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  boxFooterTextParent: {
    width: 100,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",

  },
});

const HeaderPdf = ({
  totalPdf,
  bourseInstruments,
  handleClose,
  open,
  flag,
  setflag,
  mainCategory,
  exmaple,
  arrayState,
  statePDf,
  date
}) => {
  return (
    <>
      {totalPdf?.map((info, index) => (
        <Page size="A3" style={stylePdf.page} orientation="landscape">
          <View style={stylePdf.view}>
            <View style={stylePdf.boxHeader}>
              <View style={stylePdf.boxParent}>
                <View style={stylePdf.boxTitle}>
                  <Text>{statePDf.from_date? dateMiladiToShamsi(statePDf.from_date.split(" ")) : date}</Text>
                </View>
                <Text style={stylePdf.boxText}>تاریخ عرضه</Text>
              </View>
              <View style={stylePdf.boxParent}>
                <View style={stylePdf.boxTitle}>
                  <Text>{mainCategory?mainCategory.Name:'همه گروه ها'}</Text>
                </View>
                <Text style={stylePdf.boxText}>گروه</Text>
              </View>
              <Text style={stylePdf.h}>لیست محصولات عرضه شده در بورس کالا</Text>
            </View>
            <TablePdf
              mainCategory={mainCategory}
              setflag={setflag}
              flag={flag}
              totalPdf={totalPdf}
              bourseInstruments={bourseInstruments}
              handleClose={handleClose}
              index={index}
              exmaple={exmaple}
              arrayState={arrayState}
            />
            <View style={stylePdf.boxFooter}>
              <View style={stylePdf.boxFooterTextParent}>
                <Text>صفحه</Text>
                <Text>{index + 1}</Text>
                <Text>از</Text>
                <Text>{totalPdf.length}</Text>
              </View>
            </View>
          </View>
        </Page>
      ))}
    </>
  );
};

export default HeaderPdf;
