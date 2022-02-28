import React from "react";
import TitlePage from "../../../../common/TitlePage";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CircleIcon from "./../../../../common/CircleIcon";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0 30px 0",
  },
  color: {
    color: theme.palette.light.type2,
  },
  content: {
    marginTop: 75,
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto",
    justifyContent: "center",
    gridGap: "50px 50px",

    [theme.breakpoints.up("1500")]: {
      gridGap: "50px 90px",
    },
    [theme.breakpoints.down("960")]: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gridGap: "50px 80px",
    },
    [theme.breakpoints.down("768")]: {
      gridTemplateColumns: "auto auto",
      gridGap: "50px 80px",
    },
    [theme.breakpoints.down("500")]: {
      gridGap: "20px 50px",
    },
  },
  item: {
    margin: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
}));

export default function Service() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box textAlign="center">
        <TitlePage position="bottomCenter" padding="0px 0px">
          در تمام مراحل <span className={classes.color}>سرمایه‌گذاری</span>،
          همراه شما هستیم!
        </TitlePage>
        <Box className={classes.content}>
          {data.map((item, ind) => (
            <>
              {
              item.title === "کالا" ||
              item.title === "آموزش" ? (
                <Link to={"/Services"} className={classes.item}>
                  <div>
                    <CircleIcon id={item.icon} />
                    <span
                      className={"mt-2 d-block"}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <a
                  key={ind}
                  target="_blank"
                  href={item.link}
                  className={classes.item}
                >
                  <div>
                    <CircleIcon id={item.icon} />
                    <span
                      className={"mt-2 d-block"}
                    >
                      {item.title}
                    </span>
                  </div>
                </a>
              )}
            </>
          ))}
        </Box>
      </Box>
    </div>
  );
}

let data = [
  { title: "اوراق بهادار", icon: "oragh", link: "https://reg.pishrobroker.ir/" },
  { title: "کالا", icon: "kala", link: "#" },
  {
    title: "سامانه آنلاین اکسیر",
    icon: "system_online",
    link: "https://pishro.exirbroker.ir/",
  },
  {
    title: "سامانه آنلاین",
    icon: "system_online",
    link: "https://pishro.irbroker.com",
  },
  {
    title: "سامانه سهام عدالت",
    icon: "system_justice",
    link: "https://se-simabgoon.rayanbroker.ir/",
  },
  { title: "آموزش", icon: "train", link: "#" },
];
