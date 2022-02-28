import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Title from './../../../../common/TitlePage';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        padding: '42px 0 50px 0px',
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
        fontSize:30,
        // fontSize: theme.fontSize.xLarge,
        [theme.breakpoints.down('sm')]: {
            fontSize: 24
        },
    },
    desc: {
        margin: '44px 0px',
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
        title: 'پیشرو در سرمایه‌گذاری، پیشرو در زندگی',
        desc: `سرمایه‌گذاری یکی از مهم‌ترین مسائل روزمره در زندگی ماست که باید به آن توجه ویژه‌ای داشته باشیم تا بتوانیم حاشیه امنیت
        و آینده مالی مناسبی برای خودمان و فرزندانمان ایجاد کنیم. ما دغدغه‌های شما را کاملا درک می‌کنیم و به پشتوانه تجربه سال‌ها
        فعالیت موفق در نهادهای مالی بازار سرمایه ، با ارائه ابزار و راه‌حل‌های مفید سرمایگذاری می توانیم همراه همیشگی شما در این مسیر باشیم.`,
    }

    return (
        <div className={classes['root']}>
            <div className={classes['grid']}>
                <Title position={'bottomCenter'} padding={'20px'}>
                    <span className={classes['title']} >{state.title}</span>
                </Title>
                <p className={classes['desc']}>{state.desc}</p>
            </div>
        </div>
    )
}
