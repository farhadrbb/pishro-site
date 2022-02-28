import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { convertNumberToPersian } from '../../method/convertDigitToEnglish';


const useStyles = makeStyles((theme) => ({
    button: {
        width:'100%',
        backgroundColor: theme.palette.light.type2,
        color: "white",
        borderColor: theme.palette.light.type2,
        borderRadius: "0 15px 15px 15px",
        whiteSpace:'nowrap',
        [theme.breakpoints.down("xs")]: {
            fontSize:13
        },
        '&:active': {
            backgroundColor: theme.palette.light.type2,
        },
        '&:hover': {
            backgroundColor: theme.palette.light.type2,
        },
    }
}))



export default function Index({ data, padding, main, ehrazLink}) {

    const classes = useStyles()


    return (
        <Button
            variant="contained"
            className={classes.button}
            style={{ padding: padding ? padding : '10px 30px' }}
            href={main ? "https://reg.pishrobroker.ir" : ehrazLink ? "https://ehraz.pishrobroker.ir": ""}
            target="_blank"
        >
            {convertNumberToPersian(data)}
        </Button>
    )
}
