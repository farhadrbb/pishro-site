import React from 'react';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        margin: '23px 0px',
        "& img": {
            width: "auto",
            height: "493px",
            minWidth: 330,
            [theme.breakpoints.down('sm')]: {
                minWidth: 300,
                width: "100%",
                height: "auto",
                maxWidth: 700,
            },
        },
        "& svg": {
            position: "absolute",
            top: "3%",
            left: "-6%",
            width: 46,
            height: 48,
            fill: theme.palette.light.type2
        }
    },

}))


export default function Index() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src="/assets/images/Investment.png" alt="story" />
            <svg>
                <use xlinkHref="/sprit.svg#title-svg2"></use>
            </svg>
        </div>
    )
}