import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        height: 88,
        backgroundColor: "white",
        ...theme.grid.gridLg,
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        borderColor: "#707070",
        [theme.breakpoints.down('md')]: {
            width: '85% ',
        },
    },
    menu: {
        listStyle: "none",
        display: "flex",
        margin: 0,
        paddingRight:5,
        '& li': {
            padding: "10px 7px",
            margin: "10px 9px",
            fontWeight: "bold",
            '& a': {
                whiteSpace: 'nowrap'
                // color: "red"
            },
            [theme.breakpoints.down('md')]: {
                margin: "10px 5px",
            },
        }
    },
    logo: {
        width: 220,
        height: "auto",
        marginRight: 20,
        [theme.breakpoints.between('md', '1350')]: {
            display: "none"
        }
    },
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
        zIndex: 1000,

    },
    enter: {
        backgroundColor: "white",
        border: "1px solid rgba(112,112,112,1)",
        padding: '9px 45px',
        margin: "0 5px",
        // '&:active': {
        //     backgroundColor: "white",
        // },
        // '&:hover': {
        //     backgroundColor: "white ",
        // }
    },
    enterHome: {
        backgroundColor: "transparent",
        border: "1px solid #D9D9D9",
        color: "white",
        padding: '9px 45px',
        margin: "0 5px",
        // '&:active': {
        //     backgroundColor: "transparent",
        // },
        // '&:hover': {
        //     backgroundColor: "transparent",
        // }
    },
    openAccount: {
        backgroundColor: theme.palette.light.type2,
        color: "white",
        margin: "0 5px",
        padding: '9px 20px',
        border: `1px solid ${theme.palette.light.type2}`,
        width: 120,
        whiteSpace:'noWrap',
        [theme.breakpoints.down('1400')]: {
           width:90,
           fontSize:11,
        },
        '&:active': {
            backgroundColor: theme.palette.light.type2,
        },
        '&:hover': {
            backgroundColor: theme.palette.light.type2,
        },
    },

    openAccountHome: {
        backgroundColor: "white",
        color: "black",
        margin: "0 5px",
        padding: '9px 20px',
        border: `1px solid black`,
        width: 120,
        whiteSpace:'noWrap',
         [theme.breakpoints.down('1400')]: {
            width:90,
            fontSize:11
         },
        '&:active': {
            backgroundColor: "white",
        },
        '&:hover': {
            backgroundColor: "white",
        },
    }
}))

export default function Header({ home, data }) {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.navbar}>
                <Link to="/">
                    <svg className={classes.logo}>
                        <use xlinkHref="/sprit.svg#logo-pishro"></use>
                    </svg>
                </Link>

                <div>
                    <ul className={classes.menu}>
                        {
                            data.map((item, ind) => (
                                <li key={ind} style={{ zIndex: 5 }}>
                                    <Link to={item.route} >
                                        {item.label}
                                        
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Box>

            <Box className={classes.buttons}>
                <a href={"https://pishro.exirbroker.ir/"} target='_blank' rel="noopener noreferrer">
                    <Button className={classes.openAccountHome}>
                        سامانه آنلاین
                </Button>
                </a>
                <a href={'https://reg.pishrobroker.ir/'} target='_blank' rel="noopener noreferrer">
                    <Button className={!home ? classes.openAccount : classes.openAccount}>
                        افتتاح حساب
                </Button>
                </a>
            </Box>
        </Box>
    )
}
