import React from 'react'
import Title from '../../../components/common/TitleFooter';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

let useStyles = makeStyles((theme) => ({
    card: {
        // width: '24%',
        [theme.breakpoints.down("xs")]: {
            width: '100%',
        }
    },
    list: {
        listStyle: 'none',
        width: '100%',
        lineHeight: 3,
        '& > li': {
            width: '100%',
            margin: 'auto',
            textAlign: 'left',

            '& > svg': {
                width: 14,
                height: 20,
                fill: theme.palette.light.type2,
                marginRight: 8,
                position: 'relative',
                top: -2,
            }
        }
    },
    text: {
        fontSize: theme.fontSize.xSmall,
        [theme.breakpoints.down("sm")]: {
            fontSize:13
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:16
        }
    },
    items: {
        // display:'flex',
        // alignItems:'center'
    },
    title:{
        [theme.breakpoints.down("sm")]: {
            fontSize:13
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:16
        }
    }
}))

export default function  Index({ data }) {

    let classes = useStyles()

    return (
        <div className={classes['card']}>
            <Title position={'centerRight'} padding={'20px'}>
                <span className={classes.title}>{data.title}</span>
            </Title>
            <ul className={classes['list']}>
                {
                    data.list.map((data, index) => {
                        return (
                            <li key={index} className={classes.items}>
                                {
                                    data.icon && (
                                        <svg>
                                            <use xlinkHref={`/sprit.svg#${data.icon}`}></use>
                                        </svg>
                                    )
                                }
                                {
                                    data.link && (
                                        <a href={data.link} target='_blank' rel="noopener noreferrer">
                                            <span className={classes['text']}>{data.title}</span>
                                        </a>
                                    )
                                }
                                {
                                    !data.link && !data.linkRouter && (
                                        <span className={classes['text']}>{data.title}</span>
                                    )
                                }
                                {
                                    data.linkRouter && (
                                        <Link to={data.linkRouter}>
                                            {data.title}
                                        </Link>
                                    )
                                }
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
