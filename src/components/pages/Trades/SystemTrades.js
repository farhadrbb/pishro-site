import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "./../../common/TitlePage";
import { Box, Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { convertNumberToPersian } from "../../method/convertDigitToEnglish";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    overflow: "hidden",
    marginTop: 90,
  },
  root: {
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
    paddingBottom: 100,
    [theme.breakpoints.down("680")]: {
      width: "95%",
      flexDirection: "wrap",
      paddingBottom: 60,
    },
  },
  content: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    justifyContent: "center",
    marginTop: 60,
    flexWrap: "wrap",
    [theme.breakpoints.down("1450")]: {
      marginTop: 20,
      gridTemplateColumns: "auto auto auto ",
    },
    [theme.breakpoints.down("1000")]: {
      marginTop: 20,
      gridTemplateColumns: "auto auto",
      gridGap: "20px 50px",
    },
    [theme.breakpoints.down("600")]: {
      marginTop: 20,
      gridTemplateColumns: "auto auto",
      gridGap: "5px 5px",
    },
    "& p": {
      margin: "20px 0",
      fontSize: 18,
      color: "black",
    },
    "& img": {
      height: 80,
    },
    "& button": {
      border: `1px solid ${theme.palette.light.type2}`,
      borderRadius: 18,
      color: theme.palette.light.type2,
      padding: "7px 18px",
      [theme.breakpoints.down("680")]: {
        padding: "7px 13px",
      },
    },
  },
  box: {
    margin: "10px 10px",
    width: "187px",
    height: "270px",
    background: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0px 0px 36px 0px rgba(0,0,0,0.16)",
    [theme.breakpoints.down("600")]: {
      width: "160px",
    },
  },
  background: {
    position: "absolute",
    left: -30,
    top: 0,
  },
  btn: {
    width: "90%",
    margin: "0 auto",
    height: "38px",
    border: "1px solid #d1d1d1",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
}));

export default function SystemTrades() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <TitlePage position="bottomCenter">
          سامانه‌های معاملاتی کارگزاری پیشرو
        </TitlePage>

        <Box className={classes.content}>
          {data.map((item, ind) => (
            <Box key={ind} className={classes.box}>
              <a href={item.src2} target="_blank">
                <img
                  src={`/assets/images/${item.src}`}
                  alt={item.link}
                  className="mt-3"
                />
                <p className="mt-4 mb-4">
                  {convertNumberToPersian(item.title)}
                </p>
              </a>
              <div className="d-flex flex-column">
                <a href={item.src2} className={classes.btn} target="_blank">
                  {item.link2}
                </a>
                <a href={item.src1} download >
                  <span style={{ color: "lightgrey" }}>{item.link}</span>
                </a>
              </div>
            </Box>
          ))}
        </Box>
        <Hidden smDown>
          <Box className={classes.background}>
            <img
              src="/assets/images/3line-background.png"
              alt="background-pishro"
            />
          </Box>
        </Hidden>
      </div>
    </div>
  );
}

let data = [
  {
    title: "آنلاین اکسیر",
    link: "راهنما",
    link2: "ورود به سامانه",
    src: "toturial-trades.svg",
    src1: "/assets/file/راهنمای آنلاین اکسیر.pdf",
    src2: "https://pishro.exirbroker.com/login#",
  },
  {
    title: "آنلاین کلاسیک 1",
    link: "راهنما",
    link2: "ورود به سامانه",
    src: "classic-trades.svg",
    src1: "/assets/file/راهنمای آنلاین قدیمی.pdf",
    src2: "https://pishro.irbroker.com",
  },
  {
    title: "آنلاین کلاسیک 2",
    link: "راهنما",
    link2: "ورود به سامانه",
    src: "classic-trades.svg",
    src1: "/assets/file/راهنمای آنلاین قدیمی.pdf",
    src2: "https://pishro.irbroker2.com",
  },
  {
    title: "آفلاین",
    link: "راهنما",
    link2: "ورود به سامانه",
    src: "classic-trades.svg",
    src1: "/assets/file/راهنمای آنلاین قدیمی.pdf",
    src2: "https://pishro.irbrokersite.ir/",
  },
  {
    title: "سامانه سهام عدالت",
    link: "راهنما",
    link2: "ورود به سامانه",
    src: "Flag.png",
    src1: "https://samanese.ir/",
    src2: "https://se-simabgoon.rayanbroker.ir/",
  },
];
