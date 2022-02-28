import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../../../layout';
import CardDownload from './CardDownload';
// import ButtonCustom from '../../common/ButtonCustom';
// import Banner from '../../common/Banner';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.grid.gridLg,
        [theme.breakpoints.up('md')]: {
            width: '100%',
          },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
    },
    grid: {
        width: '100%',
        padding: '66px 0px',
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            justifyContent:'center'
          },
    },
    footer:{
        width: '100%',
        height: 83,
        position:'relative',
    },
    bgGreen: {
        width: '100%',
        minHeight: 83,
        opacity: .5,
        backgroundColor: theme.palette.light.type2,
    },
    desc:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        display:'flex',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin:'auto'
          },
    },
    title:{
        marginRight:21
    }
}))

export default function Index() {

    const classes = useStyles()

    const data = [
        {
            title: 'فرم فریز مشتریان حقوقی',
            link: '',
        },
        {
            title: 'فرم مشخصات مشتریان حقیقی',
            link: '',
        },
        {
            title: 'فرم آنلاین',
            link: '',
        },
        {
            title: 'فرم مشخصات مشتریان حقوقی',
            link: '',
        },
        {
            title: 'توافق‌نامه خرید و فروش اینترنتی ',
            link: '',
        },
        {
            title: 'فرم تغییر کارگزار ناظر مشتریان حقیقی ',
            link: '',
        },
        {
            title: 'تعهدنامه ',
            link: '',
        },
        {
            title: 'فرم تغییر کارگزار ناظر مشتریان حقوقی',
            link: '',
        },
        {
            title: 'فرم فریز مشتریان حقیقی ',
            link: '',
        },
    ]
    // const banner ={
    //     desc:'برای مشاوره تماس بگیرید !',
    //     btn :'‏88173567 - 021'
    // }
    return (
        <Layout>
            <div className={classes['root']}>
                <div className={classes['grid']}>
                    <div className={classes['content']}>
                        {
                            data.map((itmes, index) => {
                                return (
                                    <CardDownload key={index} data={itmes} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <Banner data={banner} /> */}
        </Layout>
    )
}