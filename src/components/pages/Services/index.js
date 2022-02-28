import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../../layout";
import CardItems from "./CardItems";
import { convertNumberToPersian } from "../../method/convertDigitToEnglish";
// import ButtonCustom from '../../common/ButtonCustom';
// import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => {
  let flex = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return {
    root: {
      ...theme.grid.gridLg,
      marginTop:30,
      padding: "50px 0px",
      ...flex,
      [theme.breakpoints.down("sm")]: {
        // width: '100%',
      },
    },
    content: {
      ...flex,
      // display:'grid',
      // gridTemplateColumns: "auto auto auto",
      gridGap:'60px 50px',
      width: "90%",
      margin: "0 auto",
      justifyContent: "center",
      alignItems: "center",
      // [theme.breakpoints.down("1100")]: {
      //   gridTemplateColumns: "auto auto auto",
      // },
      // [theme.breakpoints.down("750")]: {
      //   gridTemplateColumns: "auto",
      // },
    },
    btn: {
      marginTop: 76,
      width: "100%",
      textAlign: "center",
    },
  };
});

export default function Index() {
  const classes = useStyles();
  const data = [
    {
      title: "اوراق بهادار",
      desc: "امکان سرمایه‌گذاری مستقیم در سهام و سایر اوراق بهادار بازار بورس یا فرابورس و کسب بازدهی مناسب، یکی از جذابیت‌های اصلی بازار سرمایه برای سرمایه‌گذاران حقیقی یا حقوقی است. سرمایه‌گذاران با استفاده از خدمات افتتاح حساب غیرحضوری کارگزاری پیشرو می‌توانند در کوتاه‌ترین زمان ممکن کد معاملاتی خود را دریافت کنند.  ",
      icon: "oragh",
      btn: "شروع سرمایه‌گذاری",
      flag: true,
    },
    {
      title: "کالا",
      desc: "کارگزاری پیشرو (سیماب گون قدیم) یکی از معدود کارگزارانی است که از بدو تأسیس بورس کالای ایران، در این بازار حضور داشته است. شما پس از صدور کد معاملاتی کالا توسط کارگزاری پیشرو و طی شدن فرآیندهای مربوطه می‌توانید بر اساس شرایط عرضه و تقاضا، کالاهای مختلف را در بورس خرید و فروش کنید.",
      icon: "kala",
      btn: "معاملات کالا",
      flag: true,
    },
    {
      title: "انرژی",
      desc: "در بورس انرژی ایران به‌عنوان یک بورس کالایی، امکان انجام معاملات حامل‌‏های انرژی (شامل نفت، گاز، برق و...) و اوراق بهادار مبتنی بر کالاهای مذکور وجود دارد. در این بازار نیز مشابه سایر بورس‌‏های کالایی، تعداد زیادی خریدار و فروشنده حضور دارند که با انجام معاملات در فضایی رقابتی، دستیابی به قیمت‎های تعادلی حامل‌‏های انرژی را میسر می‌‏سازند.",
      icon: "tool",
      btn: "اطلاعات تماس با واحد انرژی",
      // btn2: 'تلفن 3265 > داخلی 6',
      btn2: convertNumberToPersian("تلفن 58117000-021 \u00a0 \u00a0\u00a0داخلی 4"),

      flag: true,
    },
    {
      title: "احراز هویت",
      desc: "فرآیند احراز هویت الکترونیک با توجه به مجوزهای دریافتی از سازمان بورس و اوراق بهادار صورت می‌پذیرد. با استفاده از سامانه احراز هویت کارگزاری پیشرو، بدون مراجعه حضوری می‌توانید از سامانه سجام (سامانه جامع اطلاعات مشتریان) کد بورسی بگیرید. بدین منظور لازم است که از قبل در سامانه سجام ثبت‌نام کرده باشید.",
      icon: "autontication",
      btn: "احراز هویت غیرحضوری",
      flag: true,
    },
    {
      title: "آموزش ",
      desc: "برای موفقیت در بورس باید مهارت‌های سرمایه‌گذاری مختلفی را فرا گرفته و آن‌ها را عملا در بازار پیاده کنید. شما با شرکت در دوره‌های دپارتمان آموزش کارگزاری پیشرو، می‌توانید اصول سرمایه‌گذاری در بورس و جدیدترین روش‌های تحلیل بازار را یاد بگیرید. همچنین برای مطالعه انواع محتوای آموزشی، صفحات کارگزاری پیشرو را در شبکه‌های مجازی (اینستاگرام و تلگرام) دنبال کنید.",
      icon: "train",
      // btn: 'آکادمی بورس',
      // btnTelegram:<Telegram,
      btnInstaTele: true,
      flag: true,
    },
  ];

  return (
    <Layout>
      <div className={classes["root"]}>
        <div className={classes["content"]}>
          {data.map((data, index) => {
            return <CardItems key={index} data={data} />;
          })}
        </div>
        {/* <div className={classes['btn']}>
                    <Link to={'/Forms'}>
                        <ButtonCustom data={'فرم‌های مشتریان'} padding={'12px 100px'} />
                    </Link>
                </div> */}
      </div>
    </Layout>
  );
}
