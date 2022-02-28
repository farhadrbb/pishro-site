import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "0 20%",
        margin: "50px 0",
        [theme.breakpoints.down(500)]: {
            padding: "0 8%",
            margin: "45px 0",
        }
    }
}));


export default function Index() {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Link to="/IntelligenceCompetitions">
                <img width="100%" height="100%" src="/assets/images/intelligence.png" alt="" />
            </Link>
        </Box>
    )
}
