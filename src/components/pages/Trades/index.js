import React from 'react'
import Layout from '../../../layout'
import TextWithImg from '../../common/TextWithImg';
import SystemTrades from "./SystemTrades";
import SystemDownloadFile from "./SystemDownloadFile";
import SystemTradesWhy from './SystemTradesWhy';

export default function Trades() {
    return (
        <Layout>
            {/* <TextWithImg data={data} /> */}
            <SystemTrades />
            <SystemDownloadFile />
            <SystemTradesWhy />
        </Layout>
    )
}


let data = {
    title: "معاملات برخط در بازار سهام ",
    content: "بازارهای مالی مدت‌ها است که تحت تأثیر پیشرفت علوم فناوری قرار گرفته‌اند و به واسطه ابزارهای نوین معاملاتی، تسهیلات چشم‌گیری در سازوکار این بازارها ایجاد شده است. بازار سرمایه ایران نیز در سال‌های اخیر از موج تغییرات ناشی از توسعه فناوری اطلاعات و ارتباطات بی نصیب نمانده‌ و در حال حاضر بخش عمده معاملات اوراق بهادار از طریق سامانه‌های معاملات برخط صورت می‌پذیرند. شما با استفاده از سامانه‌ آنلاین بدون نیاز مراجعه حضوری یا تماس تلفنی با کارگزاری می‌توانید، معاملات خود را انجام دهید!",
    src: "trades1.png"
}

