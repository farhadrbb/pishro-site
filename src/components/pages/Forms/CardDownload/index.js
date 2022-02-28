import React from 'react';
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    card:{
        width:'45%',
        minWidth:330,
        height:64,
        borderRadius: 15,
        boxShadow: `0px 0px 36px rgba(0, 0, 0, 0.161)`,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0px 32px',
        margin:'15px 15px',
        cursor: 'pointer',
    },
    icon:{
        width:19,
        height:19,
    }
}))

export default function Index({data}) {

    const classes = useStyles()

    return (
        <div className={classes['card']}>
            <p>{data.title}</p>
            <svg className={classes['icon']}>
                <use xlinkHref={'/sprit.svg#download'}></use>
            </svg>
        </div>
    )
}