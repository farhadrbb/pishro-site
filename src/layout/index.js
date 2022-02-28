import React from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";
import HeaderPage from "./../components/common/HeaderPage";
import { Container } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Banner from '../components/common/Banner';



export default function Layout({ children, home }) {

  const banner = {
    desc: 'برای مشاوره تماس بگیرید !',
    btn: '58117000 - 021'
  }




  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <div id="back-to-top-anchor">
        <Hidden smDown>
          <Header home={home} data={dataMenu} />
        </Hidden>

        <Hidden mdUp>
          <HeaderMobile home={home} data={dataMenu} />
        </Hidden>
      </div>
      {!home && <HeaderPage />}
      <div>{children}</div>
      <Banner data={banner} />
      <div>
        <Footer />
      </div>

      <ScrollToTop />
    </Container>
  );
}

const dataMenu = [
  { label: "درباره پیشرو", route: "AboutUs" },
  { label: "خدمات", route: "Services" },
  { label: "معاملات", route: "Trades" },
  { label: "لیست شعب", route: "Representation" },
  { label: "شماره حساب‌ها", route: "AcountNumber" },
  // { label: "سرمایه‌گذاری", route: "Investment" },
  // { label: "ارتباط با ما", route: "Investment" },
  // { label: "بورس کالا", route: "Boursekala"},
  // { label: "اخبار", route: "News" },
  { label: "ارتباط با ما", route: "ContactUs" },
  { label: "مسابقات هوش‌ مصنوعی", route: "IntelligenceCompetitions" }
];