import React from 'react';
import { makeStyles } from '@material-ui/core';
import CardSrvice from './CardSrvice';
import ButtonCustom from './../../../common/ButtonCustom';


const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.grid.gridLg,
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: "wrap",
        marginBottom: 126,

    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: "wrap",
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: 'auto',
            marginTop: 20,
            minWidth: '330px',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '95%',
        }
    },
    btn:{
        
    }
}))


export default function Index() {

    const classes = useStyles()

    const state = [
        {
            icon: 'oragh',
            title: 'اوراق درآمد ثابت',
            desc: 'خریداران اوراق درآمد ثابت، سرمایه‌گذاران ریسک‌گریزی هستند که به دنبال تضمین اصل و سود سرمایه‌گذاری هستند. سرمایه‌گذاری در این اوراق نسبت به سهام کم ریسک‌تر است و طی سررسید مشخصی، سود ثابتی دارند.'
        },
        {
            icon: 'safe-box',
            title: 'صندوق‌های درآمد ثابت',
            desc: "صندوق درآمد ثابت یکی از کم ریسک‌ترین گزینه‌های سرمایه‌گذاری در بازار سرمایه است که معمولا بازدهی آن از سپرده‌های بانکی کمی بیشتر است.",
        },
        {
            icon: 'home',
            title: 'تسهیلات مسکن',
            desc: 'اوراق تسهیلات مسکن یا اصلاحا «تسه»، برگه‌ای برای دریافت امتیاز تسهیلات خرید، ساخت و بازسازی واحدهای مسکونی است که بر اساس شرایط عرضه و تقاضا، روزانه در بازار فرابورس خرید و فروش می‌شوند.',
        },
        {
            icon: 'gold-ingots',
            title: 'طلا',
            desc: 'اگر به دنبال یک راه امن برای سرمایه‌گذاری در بازار طلا و سکه هستید، خرید و فروش گواهی سکه طلا در بازار بورس امکان‌پذیر است. با استفاده از این ابزار می‌توانید به بانک مراجعه نموده و سکه‌هایتان را تحویل بگیرید یا آن‌ها را برای فروش در بانک سپرده کنید.',
        },
        {
            icon: 'trading',
            title: 'سهام',
            desc: 'برگه سهم نوعی از اوراق بهادار قابل معامله در بازار سرمایه است. با خرید این اوراق شما مالک بخشی از سهام شرکت شده‌اید و در سود و زیان حاصل از فعالیت‌های شرکت مذکور، شریک هستید.',
        },
    ]

    return (
        <div className={classes['root']}>
            <div className={classes['content']}>
                {
                    state.map((items, index) => {
                        return (
                            <CardSrvice key={index} data={items} />
                        )
                    })
                }
            </div>

            <div  style={{marginTop:100}}>
                <ButtonCustom data={'افتتاح حساب آنلاین '} padding={'10px 50px'} main={true} />
            </div>
        </div>
    )
}