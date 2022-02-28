import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import Iransans from "../../../../App/fonts/IRANSansWeb/IRANSansWeb.ttf";
import MainPdf from "./main";
import HeaderPdf from "./header";

Font.register({
  family: "iransans",
  format: "truetype", // 1
  src: Iransans,
  fontStyle: "normal",
  fontWeight: "normal",
});

const stylePdf = StyleSheet.create({
  root: {
    fontFamily: "iransans",
  },
  logoParent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 45,
  },
});

const MyDocument = ({
  totalPdf,
  bourseInstruments,
  handleClose,
  flag,
  setflag,
  mainCategory,
  exmaple,
  arrayState,
  statePDf,
  mainGroup,
  subCategory,
  getCodeSubCategory,
  producer,
  date
}) => (
  <Document style={stylePdf.root}>

    <MainPdf
      statePDf={statePDf}
      mainCategory={mainCategory}
      mainGroup={mainGroup}
      subCategory={subCategory}
      getCodeSubCategory={getCodeSubCategory}
      producer={producer}
      bourseInstruments={bourseInstruments}
      date={date}
    />
    <HeaderPdf
      statePDf={statePDf}
      mainCategory={mainCategory}
      setflag={setflag}
      flag={flag}
      totalPdf={totalPdf}
      bourseInstruments={bourseInstruments}
      handleClose={handleClose}
      exmaple={exmaple}
      arrayState={arrayState}
      date={date}
    />
    
    <Page size="A3" style={stylePdf.page} orientation="landscape">
      <View style={stylePdf.logoParent}>
        <Image style={stylePdf.logo} src={"/assets/images/Group 342.jpg"} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;
