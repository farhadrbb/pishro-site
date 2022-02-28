import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "../../../../common/TitlePage";
import { Box } from "@material-ui/core";
// import Styles from "./index.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 0 0 0",
  },
  title: {
    textAlign: "center",
    "& p": {
      margin: "5px 0",
    },
  },
  color: {
    color: theme.palette.light.type2,
  },
  content: {
    ...theme.grid.gridLg,
    margin: "60px auto",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "50px auto",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  item: {
    width: 235,
    height: 180,
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 15,
    boxShadow: "0 0 36px rgba(0, 0, 0, 0.161)",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      width: 340,
      height: 177,
      margin: "23px auto",
    },

    "& span": {
      position: "absolute",
      top: 15,
      right: 15,
      color: "#DEDEDE",
      opacity: "55%",
      fontSize: 70,
      fontWeight: "bold",
    },
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    padding: 5,
    border: `1px solid ${theme.palette.light.type2}`,
    marginTop: 20,
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
  text: {
    fontSize: theme.fontSize.small,
    textAlign: "left",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      width: "98%",
      // overflow: "hidden",
      // textOverflow: "ellipsis",
      // whiteSpace: "nowrap",
    },
  },
  // link:{
  //     [theme.breakpoints.down("xs")]: {
  //         width: "85%",
  //     },
  // }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitlePage position="bottomCenter" padding="0px 0px">
        <Box className={classes.title}>
          <p className={classes.color}>۳ گام</p>
          <p>تا سرمایه‌گذاری در بورس</p>
        </Box>
      </TitlePage>

      <Box className={`${classes.content} d-flex align-items-center`}>
        {data.map((item, ind) => (
          <>
            <a
              target="_blank"
              href={item.link}
              key={ind}
              className={classes.link}
            >
              <div className={classes.item}>
                {ind + 1 === 1 ? (
                  <span>{"۱"}</span>
                ) : ind + 1 === 2 ? (
                  <span>{"۲"}</span>
                ) : (
                  <span>{"۳"}</span>
                )}
                {/* <span>{"۳"}</span> */}
                <div className={classes.icon}>
                  <svg>
                    <use xlinkHref={`/sprit.svg#${item.icon}`}></use>
                  </svg>
                </div>

                <p className={classes.text}>{item.text}</p>
              </div>
            </a>
            {ind !== 2 && (
              <div className="d-none d-lg-inline-block">_________</div>
            )}
          </>
        ))}
      </Box>
    </div>
  );
}

let data = [
  {
    text: "ثبت نام در سامانه سجام",
    icon: "autontication",
    link: "https://profilesejam.csdiran.ir/",
  },
  {
    text: "احراز هویت غیرحضوری سجام",
    icon: "open_account",
    link: "https://ehraz.pishrobroker.ir",
  },
  {
    text: "دریافت غیرحضوری کد آنلاین پیشرو",
    icon: "code_online",
    link: "https://reg.pishrobroker.ir",
  },
];
