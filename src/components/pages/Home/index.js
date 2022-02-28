import React from 'react'
import Layout from '../../../layout'
import HeaderHome from './components/HeaderHome'
import Service from './components/Service';
import { makeStyles } from "@material-ui/core/styles";
import Investment from "./components/Investment";
import News from "./components/news";
import Customers from "./components/Customers";
import Intelligence from "./../Home/components/intelligence"
import CardModal from './components/cardModal';
import DescriptionPishro from './components/descriptionPishro';


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        minHeight: 1277.22
    },
    background: {
        width: "100%",
        height: 1277.22,
        // background: "url('/assets/images/background-home.svg') center center",
        position: "absolute",
        filter: "grayscale(100%)",
        top: 220,
        zIndex: -1,
        [theme.breakpoints.down("sm")]: {
            top: 670
        }
    }
}))


export default function Home() {

    const classes = useStyles()



    return (
        <Layout home>
            <HeaderHome />
            <div className={classes.root} >
                <div className={classes.background}></div>
                <div className={classes.content}>
                    <Service />
                    <Intelligence />
                    <DescriptionPishro />
                    <Investment />
                    <News />
                    <Customers />
                </div>
                <CardModal />
            </div>
        </Layout >
    )
}