import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CircleIcon from './../../../../common/CircleIcon'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        position: 'relative',
        display: 'flex',
        zIndex: 3,
        marginBottom: 28,
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
        color: '#707070',
        fontSize: theme.fontSize.small,
        lineHeight: "35px",
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    icon: {
        height: 149,
        [theme.breakpoints.down('sm')]: {
            '& > div':{
                transform:'scale(0.8)'
            }
        },
    },
    title: {
        marginBottom: 20,
        fontSize: theme.fontSize.medium
    }
}))


export default function Index({ data }) {

    const classes = useStyles()

    return (
        <div className={classes['root']}>
            <div className={classes['gridCircle']}>
                <div className={classes['circle']}>
                    <div className={classes['bg']}></div>
                </div>
            </div>
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