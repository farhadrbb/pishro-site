import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CircleIcon from './../../../../common/CircleIcon'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        minWidth: 263,
        position: 'relative',
        zIndex: 3,
        marginBottom: 28,
        [theme.breakpoints.down('md')]: {
            width: '50%',
            margin: 'auto',
            marginTop: 20,
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: 'auto',
            marginTop: 20,
        },

    },
    gridCircle: {
        width: 78,
        height: 78,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 42,
        [theme.breakpoints.down('sm')]: {
            marginRight: 10,
        },
    },
    circle: {
        width: 23,
        height: 23,
        borderRadius: '50%',
        backgroundColor: '#E7F1DC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: theme.palette.light.type2,
    },
    content: {
        marginLeft: 36,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 12,
        },
    },
    desc: {
        maxWidth: 576,
        color: '#000000',
        fontSize: 14,
        fontWeight:400,
        lineHeight: "23px",
        // textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    icon: {
        width: 100,
        marginBottom: 10,
        paddingLeft:35,
        [theme.breakpoints.down('sm')]: {
            paddingLeft:0,
        },
    },
    title: {
        marginBottom: 13,
        fontSize: 20
    }
}))


export default function Index({ data }) {

    const classes = useStyles()

    return (
        <div className={classes['root']}>
            <div className={classes['icon']}>
                <CircleIcon id={data.icon} />
            </div>
            <div className={classes['content']}>
                <h3 className={classes['title']}>{data.title}</h3>
                <p className={classes['desc']}>{data.desc}</p>
            </div>
        </div>
    )
}