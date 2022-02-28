import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Title from './../../../common/TitlePage';
// import ButtonCustom from './../../../common/ButtonCustom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        padding: '82px 0px',
    },
    grid: {
        width: '51%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            fontSize: theme.fontSize.small,
            minWidth: '85%',
        },
    },
    Shape: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        '& > .Rectangle1': {
            width: 150,
            height: 75,
            backgroundColor: '#F4F4F4',
        },
        '& > .Rectangle2': {
            width: 100,
            height: 75,
            marginTop: 20,
            backgroundColor: '#F4F4F4',
        },
    },
    title: {
        fontSize: theme.fontSize.xLarge,
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.medium
        },
    },
    desc: {
        margin: '44px 0px 0px 0px',
        fontSize: theme.fontSize.regular,
        lineHeight: "35px",
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.fontSize.small
        },
    }
}))


export default function Index() {

    const classes = useStyles();

    const state = {
        title: 'سامانه‌های معاملاتی کارگزاری پیشرو',
        desc: 'اگر به دنبال سرمایه‌گذاری در بورس هستید، از دو روش مستقیم و غیرمستقیم می‌توانید در بازار سرمایه فعالیت کنید. برای سرمایه‌گذاری مستقیم موفقیت‌آمیز در بورس، باید دانش مالی داشته باشید یا از خدمات مشاوره‌ای استفاده کنید؛ اما فرآیند سرمایه‌گذاری غیرمستقیم، از طریق صندوق‌های سرمایه‌گذاری یا سبدگردانی اختصاصی صورت می‌پذیرد. ',
        btn: 'افتتاح حساب آنلاین',
    }

    return (
        <div className={classes['root']}>
            <div className={classes['Shape']}>
                <div className={'Rectangle1'}></div>
                <div className={'Rectangle2'}></div>
            </div>
            <div className={classes['grid']}>
                <Title position={'bottomCenter'} padding={'20px'}>
                    <span className={classes['title']} >{state.title}</span>
                </Title>
                <p className={classes['desc']}>{state.desc}</p>
                {/* <div>
                    <ButtonCustom data={'افتتاح حساب غیرحضوری'} padding={'10px 70px'} main={true} />
                </div> */}
            </div>
        </div>
    )
}
