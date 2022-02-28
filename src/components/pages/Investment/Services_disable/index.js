import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Images from './Images';
import CardSrvice from './CardSrvice';


const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.grid.gridLg,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: "wrap",
        marginBottom: 126,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            width: '85%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: 'auto',
        },
    },
    images: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: '85%',
            margin: 'auto',
            marginTop: 20,
            minWidth: '330px',
        },
    },
    lineGreen: {
        position: 'absolute',
        top: 30,
        left: '4.5%',
        width: 2,
        height: '73%',
        backgroundColor: theme.palette.light.type2,
        [theme.breakpoints.down('1207')]: {
            height: '76%',
            left: '4.2%',

        },
        [theme.breakpoints.down('1027')]: {
            height: '72.5%',
        },
        [theme.breakpoints.down('830')]: {
            left: '4%',
            height: '75%',
        },
        [theme.breakpoints.down('733')]: {
            height: '75%',
        },
        [theme.breakpoints.down('700')]: {
            height: '74%',
        },
        [theme.breakpoints.down('655')]: {
            height: '76.5%',
        },
        [theme.breakpoints.down('569')]: {
            height: '76%',
        },
        [theme.breakpoints.down('528')]: {
            height: '74%',
        },
        [theme.breakpoints.down('494')]: {
            height: '76%',
        },
    }
}))


export default function Index() {

    const classes = useStyles()

    const state = [
        {
            icon: 'search',
            title: 'تحلیل و مشاوره',
            desc: 'شما به عنوان یک سرمایه‌گذار برای فعالیت در بازار بورس به گزارشات تحلیلی صحیح و قابل استناد نیاز دارید یا اگر تخصصی در امور چینش سبد سهام ندارید، برای انتخاب گزینه‌های مناسب سرمایه‌گذاری و مدیریت ریسک پرتفوی می‌توانید از نظرات تحلیل‌گران خبره کارگزاری پیشرو بهره‌مند شوید.'
        },
        {
            icon: 'sabad',
            title: 'سبدگردانی',
            desc: 'سبدگردانی یا مدیریت پرتفو شامل وضعیتی است که شما فرصت و تخصص لازم برای فعالیت در بورس را ندارید و بنابراین امور مدیریت سبد دارایی خود را به کارشناسان خبره بازار بورس واگذار می‌کنید. فرآیند سبدگردانی در چهارچوب یک قرارداد بر اساس میزان سرمایه و ریسک‌پذیری افراد انجام می‌شود.'
        },
        {
            icon: 'sandogh',
            title: 'صندوق سرمایه‌گذاری',
            desc: 'سرمایه‌گذاری در بورس برای شما حرفه‌ای های بازار سرمایه سرمایه‌گذاری در بورس برای شما حرفه‌ای های بازار سرمایه سرمایه‌گذاری در بورس برای شما حرفه‌ای '
        },
    ]

    return (
        <div className={classes['root']}>
            <div className={classes['images']}>
                <Images />
            </div>
            <div className={classes['content']}>
                {
                    state.map((items, index) => {
                        return (
                            <CardSrvice key={index} data={items} />
                        )
                    })
                }
                <div className={classes['lineGreen']} />
            </div>
        </div>
    )
}