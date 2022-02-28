import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 25,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 30,
            marginBottom:8,
            fontSize : 10
          },
    },
    text: {
        color: 'white !important',
        fontWeight: '550',
        [theme.breakpoints.down('sm')]: {
            fontSize : 10
          },
    }

}))

export default function SimpleBreadcrumbs({ data }) {

    const classes = useStyles()

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes['root']} >
            {
                data?.Breadcrumbs.map((value, index) => {
                    if (data.Breadcrumbs.length === index + 1) {
                        return (
                            <Typography key={index} className={classes['text']}>{value.title}</Typography>
                        )
                    }
                    return (
                        <Link key={index} className={classes['text']} to={value.link} >{value.title}</Link>
                    )
                })
            }
        </Breadcrumbs>
    );
}
