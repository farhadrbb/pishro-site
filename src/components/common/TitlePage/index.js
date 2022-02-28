import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        // textAlign: "center",
    },
    text: {
        // fontSize: theme.fontSize.xLarge,
        fontWeight: "bold",
        position: "relative",
        fontSize:30,
        [theme.breakpoints.down("sm")]: {
            width: '90%',
            margin: 'auto',
            fontSize:24,
        }
    },
    svg: {
        width: 17,
        height: 17,
        display: "block",
        margin: "auto",
        position: "absolute",
        bottom: -30,
        fill: theme.palette.light.type2,
        [theme.breakpoints.down("sm")]: {
            right: "calc(50% - 8.5px)",
            left: "auto!important",
        }
    },
    bottomRight: {
        left: 0
    },
    bottomCenter: {
        right: "calc(50% - 8px)",
    },
    centerRight: {
        top: 9,
        left: -20
    }
}))

export default function Title({ position, padding, children }) {

    const classes = useStyles()

    return (
        <div className={classes.title}
            style={{ padding: padding ? padding : "20px 20px 40px" }}
        >
            <h2 className={classes.text}>
                {children}
                <svg className={`${classes[position]} ${classes.svg}`}>
                    <use xlinkHref="/sprit.svg#title-svg"></use>
                </svg>
            </h2>

        </div>
    )
}
