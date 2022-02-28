import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "../../common/TitlePage";
import CircleIcon from "./../../common/CircleIcon";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  root: {
    width: "1200px",
    display: "flex",
    justifyContent: "center",
    margin: "0px auto 177px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      margin: "50px auto",
    },
  },
  item1: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  content: {
    lineHeight: "35px",
    paddingTop: 25,
    textAlign: "justify",
    color: "black",
    fontSize: "1rem",
  },
  item2: {
    width: "50%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& img": {
      width: "90%",
      height: "100%",
      float: "right",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 30,
        display: "none",
      },
    },
  },
  item3: {
    width: "100%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& img": {
      width: "90%",
      height: "100%",
      margin: "50px auto",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
  },
  details: {
    width:'95%',
    borderRadius: 15,
    margin:'77px auto 0 auto',
    boxShadow: `0px 0px 36px rgba(0, 0, 0, 0.161)`,
    marginTop: 77,
    padding: "20px 27px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width:'100%',
    },
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "start",
    },
    "& span": {
      padding: "0 10px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    color: "black",
    fontSize: "1rem",
    marginLeft:10,
    [theme.breakpoints.down("md")]: {
      margin: 15,
    },
  },
 
}));

export default function SystemTradesWhy() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes["root"]}>
        <Box className={classes.item1}>
          <div>
            <TitlePage position="bottomRight" padding="0px">
              <p>چرا سامانه‌های اکسیر و کلاسیک؟!</p>
            </TitlePage>
          </div>
          <Box className={classes.item3}>
            <img src={`/assets/images/trades2.png`} alt="trades-pishro" />
          </Box>

          {/* <p className={classes.content}>شرکت کارگزاری پیشرو به منظور ارائه خدمات بهتر و متنوع‌تر، دو سامانه معاملاتی اکسیر و کلاسیک (1 و 2) را در دسترس مشتریان خود قرار داده است؛ تا سرمایه‌گذاران بر حسب نیاز خود بتوانند از سامانه معاملاتی متناسب و دلخواه استفاده کنند. </p> */}

          <div className={classes.details}>
            <Box className={classes.item}>
              <CircleIcon id="trades2" />
              <span>پرسرعت </span>
            </Box>

            <Box className={classes.item}>
              <CircleIcon id="trades3" />
              <span>رابط کاربری جذاب</span>
            </Box>

            <Box className={classes.item}>
              <CircleIcon id="trades1" />
              <span>زیرساخت نرم‌افزاری قوی</span>
            </Box>
          </div>
        </Box>
        <Box className={classes.item2}>
          <img src={`/assets/images/trades2.png`} alt="trades-pishro" />
        </Box>
      </Box>

    </div>
  );
}
