import React from "react";

import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { dateMiladiToShamsi } from "../../../../method/date";

const stylePdf = StyleSheet.create({
  root: {
    fontFamily: "iransans",
  },
  page: {
    // backgroundColor: "red",
    // fontFamily: "iransans",
  },
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  mainRight: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainLeft: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b945e",
  },
  h: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },
  logo: {
    width: 220,
    height: 30,
  },
  boxParent: {
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  boxTitle: {
    width: "100%",
    height: 35,
    backgroundColor: "#f2f2f2",
    marginTop: 10,
    borderRadius: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  boxText: {
    marginTop: 40,
    color: "#f2f2f2",
  },
});

const MainPdf = ({
  statePDf,
  mainGroup,
  subCategory,
  getCodeSubCategory,
  producer,
  mainCategory,
  bourseInstruments,
  date
}) => {
  return (
    <Page size="A3" orientation="landscape" >
      <View style={stylePdf.main}>
        <View style={stylePdf.mainLeft}>
          <View style={stylePdf.boxParent}>
            <View style={stylePdf.box}>
              <Text style={stylePdf.boxText}>گروه</Text>
              <View style={stylePdf.boxTitle}>
                <Text>{mainCategory? mainCategory.Name :'همه گروه ها'}</Text>
              </View>
              <Text style={stylePdf.boxText}>تاریخ عرضه</Text>
              <View style={stylePdf.boxTitle}>
                <Text>{statePDf.from_date? dateMiladiToShamsi(statePDf.from_date.split(" ")) : date}</Text>
              </View>
              <Text style={stylePdf.boxText}>تعداد عرضه</Text>
              <View style={stylePdf.boxTitle}>
                <Text>{bourseInstruments.length}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={stylePdf.mainRight}>
          <Image style={stylePdf.logo} src={"/assets/images/Group 342.jpg"} />
          <Text style={stylePdf.h}>لیست محصولات عرضه شده در بورس کالا</Text>
        </View>
      </View>
    </Page>
  );
};

export default MainPdf;
