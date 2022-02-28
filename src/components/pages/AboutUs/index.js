import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../../layout";
import TextWithImg from "./../../common/TextWithImg";
// import ContactForm from "./ContactForm";
// import { Hidden } from "@material-ui/core";
// import AcountNumber from "../AcountNumber";
// import StoryTitle from "./storyTitle";
import { convertNumberToPersian } from "../../method/convertDigitToEnglish";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  from: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img1: {
    position: "absolute",
    left: -80,
    bottom: -230,
  },
  img2: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
}));

export default function Index() {
  const classes = useStyles();
  let state = {
    title: "پیشرو در سرمایه‌گذاری، پیشرو در زندگی",
    content: convertNumberToPersian(
      "شرکت کارگزاری اندیشه و بینش پیشرو با نام سابق سیماب گون در سال 1378 در اداره ثبت شرکت‌ها و مالکیت صنعتی تهران به ثبت رسید. پس از اخذ مجوزهای مربوطه از سازمان بورس و اوراق بهادار، این کارگزاری در بازار بورس اوراق بهادار تهران رسماً آغاز به کار کرد. بعد از تأسیس بازار بورس فلزات ایران در شهریور سال 1382، کارگزاری پیشرو به عنوان عضو مؤسس بورس، مجوز معاملات کالایی را نیز دریافت نمود و به واسطه عملکرد مناسب خود، پس از مدت کوتاهی در زمره فعال‌ترین کارگزاران کالایی قرار گرفت."
    ),
    src: "Churb.png",
  };
  // let state2 = {
  //   title: "داستان ما",
  //   content:
  //     "شرکت کارگزاری پیشرو با نام سابق سیماب گون در سال 1378 در اداره ثبت شرکت‌ها و مالکیت صنعتی تهران به ثبت رسید. پس از اخذ مجوزهای مربوطه از سازمان بورس و اوراق بهادار، این کارگزاری در بازار بورس اوراق بهادار تهران رسماً آغاز به کار کرد. بعد از تأسیس بازار بورس فلزات ایران در شهریور سال 1382، کارگزاری پیشرو به عنوان عضو مؤسس بورس، مجوز معاملات کالایی را نیز دریافت نمود و به واسطه عملکرد مناسب خود، پس از مدت کوتاهی در زمره فعال‌ترین کارگزاران کالایی قرار گرفت.",
  //   src: "Churb.png",
  // };

  return (
    <Layout>
      <div className={classes["root"]}>
        {/*<StoryTitle data={state2}/>*/}

        <TextWithImg data={state} />
        {/* <Hidden mdDown>
          <img
            src={"/assets/images/3line-background.png"}
            alt={""}
            className={classes["img1"]}
          />
        </Hidden> */}
      </div>
      {/* <div className={classes["from"]}>
        <ContactForm />
        <Hidden mdDown>
          <img
            src={"/assets/images/3line-background.png"}
            alt={""}
            className={classes["img2"]}
          />
        </Hidden>
      </div> */}
      {/*<Hidden mdDown>*/}
      {/*  <img*/}
      {/*    src={"/assets/images/3line-background.png"}*/}
      {/*    alt={""}*/}
      {/*    className={classes["img2"]}*/}
      {/*  />*/}
      {/*</Hidden>*/}
      {/* <AcountNumber deleteLayout={true} /> */}
    </Layout>
  );
}
