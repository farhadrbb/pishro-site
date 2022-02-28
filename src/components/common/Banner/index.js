import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../ButtonCustom';


const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: 83,
        position: 'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    bgGreen: {
        width: '100%',
        minHeight: 83,
        opacity: .5,
        backgroundColor: theme.palette.light.type2,
        // backgroundColor:'#009a44',
        opacity: 0.22,
        position: 'absolute',
        zIndex: 1,
    },
    desc: {
        display: 'flex',
        flexdWrap:'wrap',
        alignItems:'center',
        zIndex: 2,
    },
    title: {
        marginRight: 21,
        marginTop: 10,
        whiteSpace:'noWrap'
    }
}))

export default function Index({ data }) {

    const classes = useStyles()

    return (
        <div className={classes['footer']}>
            <div className={classes['bgGreen']}></div>
            <div className={classes['desc']}>
                <p className={classes['title']}>{data.desc}</p>
                <ButtonCustom data={data.btn}/>
            </div>
        </div>
    )
}