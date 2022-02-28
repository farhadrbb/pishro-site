import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TitlePage from "../TitlePage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1200px",
    display: "flex",
    justifyContent: "center",
    margin: "100px auto",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      margin: "50px auto",
    },
  },
  item1: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  content: {
    lineHeight: "35px",
    paddingTop: 25,
    textAlign: "justify",
    color: "black",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  item2: {
    width: "50%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "& img": {
      width: "80%",
      height: "100%",
      float: "right",
      [theme.breakpoints.down("md")]: {
        width: "95%",
        marginTop: 30,
      },
    },
  },
  svg: {
    width: 67,
    height: 66,
    position: "absolute",
    top: 33,
    left: "calc(20% - 33px)",
    [theme.breakpoints.down("md")]: {
      left: "calc(5% - 24px)",
      top: 40,
      width: 47,
      height: 46,
    },
  },
  img2: {
    position: "absolute",
    right: 0,
    bottom: 40,
  },
}));

export default function TextWithImg({ data }) {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes["root"]}>
        <Box className={classes.item1}>
          <TitlePage position="bottomRight" padding="0px">
            <p>{data.title}</p>
          </TitlePage>
          <p className={classes.content}>{data.content}</p>
        </Box>
        <Box className={classes.item2}>
          <img
            src={`/assets/images/${data.src}`}
            alt="trades-pishro"
            style={{ borderRadius: 13 }}
          />
          <svg className={classes.svg}>
            <use xlinkHref={`/sprit.svg#title-svg2`}></use>
          </svg>
        </Box>
       
      </Box>
    </div>
  );
}
