import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "./Breadcrumbs";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Styles from './index.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    with: "100%",
    minHeight: 200,
    position: "relative",
  },
  bg: {

    maxHeight: 205,
    minHeight: 205,
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
    overflow: 'hidden'
  },
  img: {
    // background: `linear-gradient(to bottom, rgba(10, 21, 22, 0.8), rgba(10, 21, 22, 0.8))`,
    // width:2000,
    // height:700,
    width: "100%",
    height: '100%',
    position: "absolute",
    bottom: "-50%",
    left: 2000,
    [theme.breakpoints.down("1400")]: {
      width: "100%",
      height: '100%',
    },
  },
  grid: {
    ...theme.grid.gridLg,
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  cardTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },
  title: {
    maxWidth: "600px",
    fontSize: theme.fontSize.xLarge,
    paddingBottom: 20,
    "& > h1 ": {
      height: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.fontSize.xSmall,
    },
  },
  icon: {
    width: 17,
    height: 17,
    fill: "white",
  },
}));

export default function Index() {
  const classes = useStyles();
  const [state, setstate] = useState("Services");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const obj = {
    Services: {
      title: "خدمات کارگزاری پیشرو",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "خدمات", link: "/Services" },
      ],
    },
    Forms: {
      title: "فرم‌های مشتریان",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "فرم ها", link: "/Forms" },
      ],
    },
    Investment: {
      title: "سرمایه‌گذاری",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "سرمایه‌گذاری", link: "/Investment" },
      ],
    },
    Trades: {
      title: "معاملات",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "معاملات", link: "/Trades" },
      ],
    },

    AboutUs: {
      title: "درباره پیشرو",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "درباره ما", link: "/AboutUs" },
      ],
    },
    Representation: {
      title: "لیست شعب",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "لیست شعب", link: "/Representation" },
      ],
    },
    AcountNumber: {
      title: "شماره حساب‌ها",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "شماره حساب‌ها", link: "/AcountNumber" },
      ],
    },
    Boursekala: {
      title: 'بورس کالا',
      Breadcrumbs: [
        { title: 'خانه', link: '/' },
        { title: 'بورس کالا', link: '/Boursekala' },
      ]
    },
    News: {
      title: "اخبار",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "اخبار", link: "/News" },
      ],
    },
    NewsDetails: {
      title: "اخبار",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "اخبار", link: "/NewsDetails" },
      ],
    },
    ContactUs: {
      title: "ارتباط با ما",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "ارتباط با ما", link: "/ContactUs" },
      ],
    },
    IntelligenceCompetitions: {
      title: "مسابقات هوش‌ مصنوعی",
      Breadcrumbs: [
        { title: "خانه", link: "/" },
        { title: "مسابقات هوش‌ مصنوعی", link: "/IntelligenceCompetitions" },
      ],
    },
  };

  useEffect(() => {
    let url = window.location.pathname.replace("/", "");
    setstate(url);
  }, [window.location.pathname]); //eslint-disable-line  react-hooks/exhaustive-deps

  return (
    <div className={classes["root"]}>
      <div className={classes["grid"]}>
        <Breadcrumbs data={obj[state]} />
        <div className={classes["cardTitle"]}>
          <div className={classes["title"]}>
            <h1>{obj[state]?.title}</h1>
            <svg className={classes["icon"]}>
              <use xlinkHref={"/sprit.svg#title-svg"}></use>
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.bg}>
        <img
          src={`/assets/images/${matches ? "IMG_20220110_160931_227.jpg" : "IMG_20220110_160931_227.jpg"}`}
          alt={""}
          className={Styles["img"]}
        />
        <div className={Styles["filter"]}></div>
      </div>
    </div>
  );
}
