import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Box } from '@material-ui/core';
import ButtonCustom from "./../../components/common/ButtonCustom";
import { Link } from 'react-router-dom';

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        display: "flex",
        margin: "15px   auto",
        justifyContent: "space-between",
        zIndex: 2,
        position: "relative",
        alignItems: "center"
    },
    logo: {
        width: 170.5,
        height: 45
    },
    enterHomeRoot: {
        backgroundColor: "transparent",
        border: "1px solid white",
        color: "white",
        padding: '5.5px 30px',
        margin: "1px 5px",
        '&:active': {
            backgroundColor: "transparent",
        },
        '&:hover': {
            backgroundColor: "transparent",
        }
    },
    buttuns: {
        display: "flex"
    },
    enterHome: {
        backgroundColor: "transparent",
        border: "1px solid white",
        boxShadow: 0,
        color: "white",
        padding: '5.5px 30px',
        margin: "0 5px",
        '&:active': {
            backgroundColor: "transparent",
        },
        '&:hover': {
            backgroundColor: "transparent",
        }
    },
    navbar: {
        width: 40,
        height: 40,
        [theme.breakpoints.down("sm")]: {
            border: "1px solid #B5B5B5",
            borderRadius: 7
        }
    },

    list: {
        width: "300px",
        display: "contents",
    },
    fullList: {
        width: 'auto',
    },
    item: {
        width: "100%",
    },
    enter: {
        backgroundColor: "white",
        border: "1px solid gray",
        padding: '5.5px 30px',
        margin: "0 5px",
        '&:active': {
            backgroundColor: "white",
        },
        '&:hover': {
            backgroundColor: "white ",
        }
    },
    openAccount: {
        backgroundColor: theme.palette.light.type2,
        color: "white",
        margin: "0 5px",
        '&:active': {
            backgroundColor: theme.palette.light.type2,
        },
        '&:hover': {
            backgroundColor: theme.palette.light.type2,
        }
    },
    topBox: {
        margin: 20,
        display: "flex",
        justifyContent: "space-between",
        "& svg": {
            width: 40,
            height: 38,
            cursor: "pointer"
        }
    },
    listItem: {
        padding: 0,
        margin: 0,
        display:'flex',
        justifyContent:'center'
    },
    itemText: {
        padding: "26px 31px",
        borderBottom: "1px solid #DCDCDC",
        display:'flex',
        justifyContent:'center',
        margin: 0
    },
    bottomBox: {
        height: 83,
        backgroundColor: "#DDEBCD",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontWeight: 600,
        padding: "25px 25px",
        position: "sticky",
        bottom: 0,
        width: "100%",
        marginTop:'auto'
    }
}));


export default function HeaderMobile({ home, data }) {
    const classes = useStyles();
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box
                className={classes.topBox}
            >  
            
                <Box>
                    {/* <Button variant="contained" className={classes.enter} >ورود</Button> */}
                    <a href={'https://reg.pishrobroker.ir/'} target='_blank' rel="noopener noreferrer">
                        <Button variant="contained" className={classes.openAccount}>افتتاح حساب آنلاین</Button>
                    </a>
                </Box>

                <Box>
                    <svg
                        onClick={() => toggleDrawer(anchor, false)}
                    >
                        <use xlinkHref="/sprit.svg#close"></use>
                    </svg>
                </Box>

            </Box>

            <Divider />

            <List
                className={classes.item}
            >
                {data.map((text, index) => (
                    <ListItem
                        className={classes.listItem}
                        button
                        key={index}
                        component={Link}
                        to={text.route}
                    >
                        <ListItemText
                            primary={text.label}
                            className={classes.itemText}
                        />
                        <Divider />

                    </ListItem>
                ))}
            </List>

            <Box className={classes.bottomBox}>

                <span>
                    مشاوره رایگان
                </span>

                <ButtonCustom data={'‏88173567 - 021'} padding="8px 14px" />
            </Box>
        </div>
    );




    return (
        <div>
            <React.Fragment>
                <Box className={classes.root}>
                    <Box>
                        <Link to="/">
                            <svg className={classes.logo}>
                                <use xlinkHref="/sprit.svg#logo-pishro"></use>
                            </svg>
                        </Link>
                    </Box>
                    <Box className={classes.buttuns}>
                        {/* {
                            home && (
                                <Button variant="contained" className={!home ? classes.enter : classes.enterHomeRoot} >ورود</Button>
                            )
                        } */}

                        <svg
                            className={classes.navbar}
                            onClick={toggleDrawer("right", true)}
                        >
                            <use xlinkHref="/sprit.svg#navbar"></use>
                        </svg>
                    </Box>
                </Box>

                {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
                <SwipeableDrawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                >
                    {list("right")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}
