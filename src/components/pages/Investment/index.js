import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../../../layout';
import RegisterAccount from './RegisterAccount';
import Services from './Services/index';
// import Banner from '../../common/Banner';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },

}))


export default function Index() {

    const classes = useStyles()

    // const banner = {
    //     desc: 'برای مشاوره تماس بگیرید !',
    //     btn: '‏88173567 - 021'
    // }

    return (
        <Layout>
            <div className={classes['root']}>
                <RegisterAccount />
                <Services />
                {/* <Banner data={banner} /> */}
            </div>
        </Layout>
    )
}