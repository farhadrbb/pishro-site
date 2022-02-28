import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "left",
    },
    text: {
        fontSize: theme.fontSize.regular,
        fontWeight: "bold",
        position: "relative"
    },
    svg: {
        width: 9,
        height: 9,
        display: "block",
        margin: "auto",
        position: "absolute",
        top: 45,
        fill:theme.palette.light.type2
    },
    bottomRight: {
        left: 0
    },
    bottomCenter: {
        right: "calc(50% - 8px)"
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
            style={{ padding: padding ? padding : "20px 20px 40px" }}>
            <span className={classes.text}>
                {children}
                <svg className={`${classes.svg} ${classes[position]}`}>
                    <use xlinkHref="/sprit.svg#title-svg"></use>
                </svg>
            </span>

        </div>
    )
}
