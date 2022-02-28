import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react'
import Layout from '../../../layout'
import TextWithImg from '../../common/TextWithImg';
import TextWithImgReverce from '../../common/TextWithImgReverce';
import { convertNumberToPersian } from '../../method/convertDigitToEnglish';
import TitlePage from "../../common/TitlePage";
import CircleIcon from "./../../common/CircleIcon";
import DropdownQuestion from './components/dropdownQuestion';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        padding: '62px 0 70px 0px',
    },
    grid: {
        width: '51%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minWidth: '330px',

        [theme.breakpoints.down('sm')]: {
            width: '80%',
            fontSize: theme.fontSize.small,
            minWidth: '85%',
        }
    },
    title: {
        fontSize: 30,
        // fontSize: theme.fontSize.xLarge,
        [theme.breakpoints.down('sm')]: {
            fontSize: 24
        },
    },
    texts: {
        margin: '44px 0px',
    },
    desc: {
        fontSize: theme.fontSize.regular,
        lineHeight: "30px",
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.small
        },
    },
    color: {
        color: theme.palette.light.type2,
    },
    content: {
        marginTop: 75,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        justifyContent: "center",
        gridGap: "50px 50px",

        [theme.breakpoints.up("1500")]: {
            gridGap: "50px 90px",
        },
        [theme.breakpoints.down("960")]: {
            display: "grid",
            gridTemplateColumns: "auto auto",
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
    address: {
        width: '1200px',
        margin: "100px auto",
        [theme.breakpoints.down(1200)]: {
            width: "85%"
        }
    },
    grid: {
        margin: "0 10px",
        boxSizing: "border-box",
        [theme.breakpoints.down(1200)]: {
            margin: "0"
        }
    },
    paper: {
        padding: 15,
        textAlign: "center",
        minHeight: 135 ,
        [theme.breakpoints.down(1200)]: {
            minHeight: "auto"
        }
    }
}))

export default function IntelligenceCompetitions() {
    const classes = useStyles();

    return (
        <Layout>
            <TextWithImg data={state} />

            <Box textAlign="center">
                <TitlePage position="bottomCenter" padding="0px 0px">
                    مراحل {" "}
                    <span className={classes.color}>مسابقات</span>
                </TitlePage>

                <Box className={classes.content}>
                    {
                        dataStep.map((item, ind) => (
                            <div key={ind}>
                                <CircleIcon id={item.icon} />
                                <span
                                    className={"mt-2 d-block"}
                                >
                                    {item.title}
                                </span>
                            </div>
                        ))
                    }
                </Box>

            </Box>

            <TextWithImgReverce data={state2} />

            <DropdownQuestion />

            <Box className={classes.address}>
                <Grid container justifyContent="center" alignItems="center" flexDirection="wrap">
                    <Grid className={classes.grid} item xs={12} lg={5} spacing={5}>
                        <Paper className={classes.paper}>
                            <h5>آدرس ما</h5>
                            <p>تهران، دانشگاه صنعتی امیرکبیر، دانشکده مهندسی کامپیوتر، دبیرخانه مسابقات هوش مصنوعی</p>
                        </Paper>
                        <Paper>
                        </Paper>
                    </Grid>
                    <Grid className={classes.grid} item xs={12} lg={3} spacing={5}>
                        <Paper className={classes.paper}>
                            <h5>شماره تماس</h5>
                            <p>{convertNumberToPersian("021-66419411")}</p>
                            <p>{convertNumberToPersian("021-66495521")}</p>
                        </Paper>
                    </Grid>
                    <Grid className={classes.grid} item xs={12} lg={3} spacing={5}>
                        <Paper className={classes.paper}>
                            <h5>آدرس ایمیل</h5>
                            <p>aaic@aut.ac.ir</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

let state = {
    title: "درباره مسابقات هوش مصنوعی امیرکبیر",
    content: <>
        {convertNumberToPersian("مسابقات هوش مصنوعی امیرکبیر (مهما) یا Amirkabir Artificial Intelligence Competitions (AAIC) مجموعه‌ای از مسابقات مرتبط با حوزه‌ی هوش مصنوعی است که از سال 1391 در دانشگاه صنعتی امیرکبیر برگزار می‌گردد. نخستین دوره‌ی این مسابقات در آبان 1391 در هفت رشته، دومین دوره‌ی آن در آبان 1392 در ده رشته، سومین دوره این مسابقات در آبان 1394 در ده رشته، چهارمین دوره این مسابقات در اسفند ۱۳۹۷ در پنج رشته و پنجمین دوره این مسابقات در آبان 1398 در سه رشته برگزار گردید. بر اساس برنامه‌ریزی‌های صورت گرفته، ششمین دوره این مسابقات اسفند ۱۴۰۰ در دانشگاه صنعتی امیرکبیر برگزار خواهد شد.")}
        <p className="m-0 fw-bold">در این مسابقات سعی شده است بیشتر به مسائلی پرداخته شود که تا حد ممکن:</p>
        <ul>
            <li className="mx-3">مربوط به نیازهای داخلی کشور باشند.</li>
            <li className="mx-3">امکان ارزیابی و مقایسه راه‌حل‌های پیشنهادی برای آنها وجود داشته باشد.</li>
            <li className="mx-3">مربوط به حوزه هوش مصنوعی بوده و یا از روش‌های هوشمند برای حل آنها استفاده شده باشد.</li>
        </ul>
    </>,
    src: "Android-cuate.svg",
};

let state2 = {
    title: "برخی از مهمترین اهداف این مسابقات عبارتند از:",
    content: <>
        <ul>
            <li className="mx-3"> ارتقاء دانش بومی در زمینه هوش مصنوعی</li>
            <li className="mx-3"> شناسایی و معرفی محصولات و شرکت‌های موفق داخلی مرتبط با هوش مصنوعی</li>
            <li className="mx-3">فراهم ساختن بسترهای لازم برای عرضه ایده‌های جدید محققان و کمک به تجاری‌سازی آنها</li>
            <li className="mx-3">فراهم ساختن بسترهای لازم برای عرضه نیازهای سازمان‌ها، شرکت‌ها و صنایع و ارائه راهکار توسط محققان</li>
            <li className="mx-3"> بحث و تبادل نظر میان دانشگاهیان، محققان و صنعت‌گران پیرامون زمینه‌های مستعد همکاری</li>
        </ul>
        <p>شیوه کلی برگزاری مسابقات به این صورت است که در مرحله اول، تیم‌های متقاضی در سایت مسابقه ثبت‌نام می‌کنند و بعد از تایید اولیه اطلاعات مسابقه در اختیار آنها قرار داده می‌شود. سامانه‌های آماده شده توسط تیم‌ها در مراحل مختلفی ارزیابی می‌شود و در نهایت ارزیابی نهایی به صورت متمرکز انجام خواهد شد. به منظور تشویق بیشتر محققان به شرکت در مسابقات، متناسب با حمایت‌های مالی جذب شده جوایز ارزنده‌ای برای برگزیدگان در نظر گرفته شده است.</p>
    </>,
    src: "Artificialintellig.svg",
};

let dataStep = [
    { title: "شروع ثبت‌نام", icon: "start" },
    { title: "تایید تیم‌ها", icon: "team" },
    { title: "شروع چالش‌ها", icon: "challenge" },
    { title: "رویداد نهایی", icon: "event" },
]