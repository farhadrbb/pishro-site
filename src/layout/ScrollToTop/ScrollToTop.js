import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';



const useStyles = makeStyles(() => ({
    root: {
        position: "fixed",
        left: "2%",
        bottom: 100,
        cursor: "pointer",
        zIndex: 10000
    }
}))



export default function ScrollToTop(props) {

    return (
            <ScrollTop {...props}>
                <Fab color="default" size="small" aria-label="scroll back to top">
                    <img src="/assets/images/scrollTop.svg" alt="pishro" />
                </Fab>
            </ScrollTop>
    )
}




function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        // disableHysteresis: true,
        threshold: 500,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes['root']}
            >
                {children}
            </div>
        </Zoom >
    );
}

