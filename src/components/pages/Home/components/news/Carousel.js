import React from "react";
import Card from "./Card";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        [theme.breakpoints.up('lg')]: {
            padding: "0 15%",
        }
    },
}));



export default function CarouselCustom({ data , pagnation ,setPagnation , setflagApi  }) {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
        >
                <Card
                    data={data}
                    pagnation={pagnation}
                    setPagnation={setPagnation}
                    setflagApi={setflagApi}
                />
        </div>
    );
}

