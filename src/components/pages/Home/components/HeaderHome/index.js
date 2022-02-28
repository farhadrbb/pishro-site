import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ButtonCustom from "./../../../../common/ButtonCustom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 500,
    backgroundImage: `linear-gradient(to bottom, rgba(10, 21, 22, 0.85), rgba(10, 21, 22, 0.85)), url('/assets/images/header.jpg');`,

    maxHeight: 500,
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: 291,
    },
  },
  grid: {
    color: "white",
    "& > div > h1": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3em",
      fontWeight: 900,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.7em",
        fontWeight: "bold",
      },
    },
  },
  head: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  btn: {
    textAlign: "center",
    margin: "auto !important",
    // [theme.breakpoints.down("xs")]: {
    //     width:150,
    // },
  },
  color: {
    color: theme.palette.light.type2,
  },
}));

export default function HeaderHome() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.grid}>
          <div className={classes.head}>
            <h1>
              در سرمایه‌گذاری
              <p className={`${classes.color} m-2`}>پیشرو</p>
              باشیم!
            </h1>
            <div className={`${classes.btn} m-2`}>
              <ButtonCustom
                data={"افتتاح حساب غیرحضوری"}
                padding={"10px 30px"}
                main={true}
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
