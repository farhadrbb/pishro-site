import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 20,
        left: 20,
        width: 'fit-content',
        zIndex : 100000,
        [theme.breakpoints.down("xs")] : {
            width : "90%",
            left : "5%"
        },
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SimpleAlerts({ typeAlert, textAlert }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity={typeAlert}>{textAlert}</Alert>
        </div>
    );
}



// {/* <Alert severity="error">This is an error alert — check it out!</Alert>
//       <Alert severity="warning">This is a warning alert — check it out!</Alert>
//       <Alert severity="info">This is an info alert — check it out!</Alert> */}
