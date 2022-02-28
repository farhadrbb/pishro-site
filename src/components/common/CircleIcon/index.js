import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    circle: {
        width: 75,
        height: 75,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.light.type2}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin : "auto"
    },
    borderWhite:{
        width: 72,
        height: 72,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(216,239,226,1)',
        border: '3px solid white',
    },
    icon: {
        width: 34,
        height: 33
    },

}))

export default function Index({ id }) {

    const classes = useStyles()

    return (
        <div className={classes['circle']}>
            <div className={classes['borderWhite']}>
                <svg className={classes['icon']}>
                    <use xlinkHref={`/sprit.svg#${id}`} ></use>
                </svg>
            </div>
        </div>
    )
}
