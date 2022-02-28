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
  
  const stylePdf = StyleSheet.create({
    tableHeadParent: {
      width: "100%",
      height: 50,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 9,
    },
    tableHead: {
      width:80 ,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadPrice: {
      width:60 ,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadName: {
      width:150,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadCode: {
      width: 55,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadtahvil: {
      width: 55,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
   
    tableHeadDes: {
      width: 470,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8
    },
  });
  

const TableHeadPdf = () => {
  return (
    <View style={stylePdf.tableHeadParent}>
      <View style={stylePdf.tableHeadCode}>
        <Text>کد </Text>
      </View>
      <View style={stylePdf.tableHeadName}>
        <Text>کالا</Text>
      </View>
      <View style={stylePdf.tableHeadName}>
        <Text>عرضه کننده</Text>
      </View>
      <View style={stylePdf.tableHeadDes}>
        <Text>شرح</Text>
      </View>
      <View style={stylePdf.tableHead}>
        <Text>حجم عرضه</Text>
      </View>
      <View style={stylePdf.tableHeadCode}>
        <Text>قیمت پایه</Text>
      </View>
      <View style={stylePdf.tableHeadtahvil}>
        <Text>تحویل</Text>
      </View>
      <View style={stylePdf.tableHeadPrice}>
        <Text>نحوه پرداخت</Text>
      </View>
      <View style={stylePdf.tableHead}>
        <Text>حداقل عرضه</Text>
      </View>
    </View>
  );
};

export default TableHeadPdf;