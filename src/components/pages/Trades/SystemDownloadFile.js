import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "./../../common/TitlePage";
import { Box, Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    overflow: "hidden",
  },
  root: {
    width: 660,
    margin: "auto",
    textAlign: "center",
    paddingBottom: 160,
    [theme.breakpoints.down("680")]: {
      width: "95%",
      flexDirection: "wrap",
      paddingBottom: 60,
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 60,
    [theme.breakpoints.down("768")]: {
      // flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 20,
    },
    "& p": {
      // margin: "20px 0",
      // fontSize: "1.1rem",
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
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 10px",
    [theme.breakpoints.down("768")]: {
      width: 150,
    },
  },
  background: {
    position: "absolute",
    left: -30,
    top: 0,
  },
  btn: {
    display: "flex",
    // flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    width: "171px",
    height: "38px",
    border: "1px solid #d1d1d1",
    borderRadius: "20px",
    margin: "0 auto",
    [theme.breakpoints.down("768")]: {
      width: "120px",
      height: "35px",
      fontSize: 13,
    },
  },
  circle: {
    width: 78,
    height: 78,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.light.type2}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.down("768")]: {
      width: 73,
      height: 73,
    },
  },
  borderWhite: {
    width: 71,
    height: 71,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(216,239,226,1)",
    border: "3px solid white",
    [theme.breakpoints.down("768")]: {},
  },
  icon: {
    width: 37,
    height: 36,
    [theme.breakpoints.down("768")]: {
      width: 32,
      height: 31,
    },
  },
  fontSize1: {
    fontSize: 18,
    whiteSpace:'wrap',
    margin:'20px 0',
    padding:0,
    [theme.breakpoints.down("768")]: {
      fontSize: "13px !important",
      width:130,
      // margin:'0 auto',
      display:'flex',justifyContent:'center'
    },
  },
  background: {
    position: "absolute",
    right: -170,
    bottom: 0,
  },
}));

export default function SystemTrades() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <TitlePage position="bottomCenter">دستور العمل ها</TitlePage>

        <Box className={classes.content}>
          {data.map((item, ind) => (
            <Box key={ind} className={classes.box}>
              <a href={item.src2} target="_blank" download>
                {/* <img src={`/assets/images/${item.src}`} alt={item.link} /> */}
                <div className={classes["circle"]}>
                  <div className={classes["borderWhite"]}>
                    <svg className={classes["icon"]}>
                      <use xlinkHref={`/sprit.svg#train`}></use>
                    </svg>
                  </div>
                </div>
                <p className={classes.fontSize1}>{item.title}</p>
              </a>
              <a
                href={item.src1}
                target="_blank"
                download
                className={classes.btn}
              >
                {item.link}
              </a>
            </Box>
          ))}
        </Box>
      </div>
      <Hidden smDown>
        <Box className={classes.background}>
          <img
            src="/assets/images/3line-background.png"
            alt="background-pishro"
          />
        </Box>
      </Hidden>
    </div>
  );
}

let data = [
  {
    title: "دستورالعمل اجرایی معاملات بر خط",
    link: "دریافت",
    src: "book.jpg",
    src1: "/assets/file/دستورالعمل اجرایی معاملات برخط.pdf",
    src2: "/assets/file/دستورالعمل اجرایی معاملات برخط.pdf",
  },
  {
    title: "دستورالعمل رسیدگی به تخلفات در بازار سرمایه",
    link: "دریافت",
    src: "book.jpg",
    src1: "/assets/file/دستورالعمل رسيدگي به تخلفات در بازار سرمايه.pdf",
    src2: "/assets/file/دستورالعمل رسيدگي به تخلفات در بازار سرمايه.pdf",
  },
];
