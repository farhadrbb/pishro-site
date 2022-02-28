import React from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button';


let useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        overflow: 'auto',
    },
    root: {
        width: "33%",
        minWidth: '33%',
        height: 'auto',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        margin: '50px 0px',
        border: '1px solid rgba(0,0,0,0.2)',
        [theme.breakpoints.down("sm")]: {
            minWidth: '95%',
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    desc: {
        lineHeight: 2.5
    },
    icon: {
        width: 15,
        height: 15,
        cursor: 'pointer',
    },
    button: {
        margin: '10px 0px',
        backgroundColor: theme.palette.light.type2,
        color: "white",
        borderColor: theme.palette.light.type2,
        borderRadius: "0 15px 15px 15px",
        '&:active': {
            backgroundColor: theme.palette.light.type2,
        },
        '&:hover': {
            backgroundColor: theme.palette.light.type2,
        },
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginLeft: 15,
        lineHeight: 1.5
    }

}))


export default function Index() {

    let classes = useStyle()

    return (
        <div className={classes['container']}>
            <div className={classes['root']}>
                <div className={classes['header']}>
                    <h3>
                        مشتری گرامی کارگزاری پیشرو (سیمابگون)
                    </h3>
                    {/* <svg className={classes['icon']} onClick={() => setOpen(false)}>
                    <use xlinkHref={'/sprit.svg#closeSmall'}></use>
                </svg> */}
                </div>
                <hr />
                <div>
                    <p className={classes['desc']}>
                        مطابق اطلاعیه شرکت سپرده‌گذاری سهامدارانی که در مدت مقرر زیر ثبت‌نام خود را در سامانه سجام انجام ندهند، کد معاملاتی آنها تا زمان مشخص‌شدن وضعیت سجامی آنها مسدود (غیرقابل‌خرید و فروش) می‌گردد.
                    <ul className={classes['list']}>

                            <li>
                                <p>
                                    گروه سنی (١٨ تا ٦٥ سال) تا ٢٠ شهریور
                            </p>
                            </li>
                            <li>
                                <p>
                                    گروه سنی (٦٥ به بالا) تا ٣٠ شهریور
                            </p>
                            </li>
                            <li>
                                <p>
                                    گروه سنی (زیر ١٨ سال) تا ١٠ مهر
                            </p>
                            </li>
                        </ul>

        لذا خواهشمند است در صورتی که هنوز در سامانه سجام ثبت‌نام نکرده‌اید،
        <br />
        1- ابتدا از طریق لینک زیر در سامانه سجام ثبت ‌نام نمایید:
        <br />
                        <div className={classes['alignCenter']}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                style={{ padding: '10px 30px' }}
                                href={'https://yun.ir/sejampishro'}
                                target="_blank"
                            >
                                ثبت نام در سامانه سجام
                </Button>
                        </div>

        2- سپس از طریق سامانه احراز هویت غیرحضوری سجام کارگزاری پیشرو
        به آدرس زیر نسبت به احراز هویت خود اقدام نمایید.
        <br />
                        <div className={classes['alignCenter']}>    
                            <Button
                                variant="contained"
                                className={classes.button}
                                style={{ padding: '10px 30px' }}
                                href={' https://ehraz.pishrobroker.ir'}
                                target="_blank"
                            >
                                احراز هویت غیرحضوری در سامانه سجام
                    </Button>
                        </div>
        3- پس از تأیید احراز هویت سجام اطلاعات می‌توانید با به‌روزرسانی قراردادهای خود
        از طریق درگاه ثبت ‌نام غیرحضوری کارگزاری پیشرو به‌راحتی از سامانه آنلاین کارگزاری و دیگر خدمات آن استفاده نمایید.
        <br />
                        <div className={classes['alignCenter']}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                style={{ padding: '10px 30px' }}
                                href={'https://reg.pishrobroker.ir'}
                                target="_blank"
                            >
                                ثبت نام در کارگزاری و دریافت کد معاملاتی آنلاین
                         </Button>
                        </div>
                    در صورت نیاز به اطلاع بیشتر با شماره تلفن 88523205-021 تماس حاصل نمایید .
                </p>
                </div>
            </div>

        </div>
    )
}


