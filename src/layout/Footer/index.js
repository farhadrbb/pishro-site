import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardList from "./cardList";
import { Link } from "react-router-dom";
import { convertNumberToPersian } from "../../components/method/convertDigitToEnglish";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    ...theme.grid.gridLg,
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // flexWrap: "wrap",
    // [theme.breakpoints.down("md")]: {
    //   width: "80%",
    //   gridTemplateColumns:'auto auto auto',
    // },
    "@media(min-width:0px) and (max-width:550px)": {
      gridTemplateColumns: "auto",
    },
    "@media(min-width:551px) and (max-width:1100px)": {
      gridTemplateColumns: "auto auto",
    },
    // [theme.breakpoints.down("xs")]: {
    //   width: "80%",
    //   justifyContent: "flex-start",
    // },
  },
  icon: {
    width: "22px !important",
    marginLeft: 11,
    fill: theme.palette.light.type2,
    height: 20,
    marginTop: 30,

    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
      marginBottom: 50,
    },
  },
  logo: {
    width: "80%",
    height: 50,
    fill: "#002C2E !important",
    opacity: 0.5,
    filter: " grayscale(100%)",
    // [theme.breakpoints.down("xs")]: {
    //   width: "90%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "70%",
    // },
    "@media(min-width:0px) and (max-width:550px)": {
      width: "70%",
    },
  },
  "grid-logo": {
    paddingTop: 10,
    // width: "24%",
    "@media(min-width:0px) and (max-width:550px)": {
      gridTemplateColumns: "auto",
      width: "90%",
    },
    // [theme.breakpoints.down("xs")]: {
    //   width: "90%",
    //   marginRight:0
    // },
  },
  copyRightText: {
    height: 45,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const state = [
    {
      title: "سامانه‌های معاملاتی",
      list: [
        {
          title: "اکسیر",
          icon: "",
          link: "https://pishro.exirbroker.com",
        },
        {
          title: convertNumberToPersian("آنلاین کلاسیک 1"),
          icon: "",
          link: "https://pishro.irbroker.com",
        },
        {
          title: convertNumberToPersian("آنلاین کلاسیک 2"),
          icon: "",
          link: "https://pishro.irbroker2.com",
        },
        {
          title: "آفلاین",
          icon: "",
          link: "https://pishro.irbrokersite.ir/",
        },
      ],
    },
    {
      title: "لینک‌های کاربردی",
      list: [
        {
          title: "سامانه سجام",
          icon: "",
          link: "https://profilesejam.csdiran.ir/",
        },
        {
          title: "احراز هویت غیرحضوری",
          icon: "",
          link: "https://ehraz.pishrobroker.ir/",
        },
        {
          title: "سامانه سهام عدالت",
          icon: "",
          link: "https://se-simabgoon.rayanbroker.ir/",
        },
        {
          title: "ثبت نام",
          icon: "",
          link: "https://reg.pishrobroker.ir/",
        },
        {
          title: "درگاه یکپارچه ذینفعان",
          icon: "",
          link: "https://ddn.csdiran.ir/login",
        },
        {
          title: "اخبار",
          icon: "",
          linkRouter: "/News",
        },
      ],
    },
    {
      title: "راه‌های ارتباط با کارگزاری پیشرو",
      list: [
        {
          title: convertNumberToPersian(
            "تهران،خیابان سهروردی شمالی، خیابان خرمشهر (آپادانا)، جنب شهرداری، پلاک 35"
          ),
          icon: "map",
        },
        {
          title: convertNumberToPersian("‏58117000 - 021"),
          icon: "tell",
        },
        {
          title: "contact@pishrobroker.ir",
          icon: "email",
        },
      ],
    },
  ];
  const icons = {
    header: "logo-pishro",
    list: [
      { label: "telegram", url: "https://t.me/pishrobroker" },
      { label: "instagram", url: "https://www.instagram.com/pishrobroker" },
    ],
  };
  return (
    <>
      <div style={{ padding: "20px 0px", backgroundColor: "#F2F4F6" }}>
        <div className={classes.root}>
          <div className={classes["grid-logo"]}>
            <div style={{ height: 37 }}>
              <Link to="/">
                <svg className={classes.logo}>
                  <use xlinkHref={`/sprit.svg#${icons.header}`}></use>
                </svg>
              </Link>
            </div>
            <div className=" pe-md-0">
              {icons.list.map((icon, index) => {
                return (
                  <a href={icon.url} target="_blank">
                    <svg
                      key={index}
                      style={{ width: 25 }}
                      className={classes.icon}
                    >
                      <use xlinkHref={`/sprit.svg#${icon.label}`}></use>
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
          {state.map((data, index) => {
            return <CardList key={index} data={data} />;
          })}
           <div>
            <a
              referrerpolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=244488&amp;Code=Xjg5aPL4TpQk7Tmovyi0"
            >
              <img
                referrerpolicy="origin"
                src="https://Trustseal.eNamad.ir/logo.aspx?id=244488&amp;Code=Xjg5aPL4TpQk7Tmovyi0"
                alt=""
                //   style="cursor:pointer"
                id="Xjg5aPL4TpQk7Tmovyi0"
              />
            </a>
          </div>
         
        </div>
      </div>
      <div className={classes["copyRightText"]}>
        <p>‏ © تمامی حقوق برای کارگزاری پیشرو محفوظ است 2020 Copyright</p>
      </div>
    </>
  );
}
