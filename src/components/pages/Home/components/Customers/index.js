import { Box, makeStyles } from '@material-ui/core'
import React from 'react';

let useStyles = makeStyles({
    itme:{
        filter: `grayscale(100%)`,
        '&:hover':{
            filter:'none'
        }
    }
})

export default function Index() {

    let classes = useStyles();

    return (
        <Box display="flex" justifyContent="center" margin="60px 9px" flexWrap="wrap">
            {
                data.map((item, ind) => (
                    <a href={item.link} target="_blank" key={ind} className={classes.itme}>
                        {!item.src && (
                        <svg
                            style={{ margin: 5, height: 70, width: 79, cursor: "pointer" }}
                            className="hoverScale transition-custom"
                        >
                            <use xlinkHref={`/sprit.svg#customer${item.name}`} ></use>
                        </svg>
                        )}
                        {/* {item.src && (
                            <img src={item.src} alt="" style={{ margin: 5, height: 70, width: 70, cursor: "pointer" }} className="hoverScale transition-custom"/>
                        )} */}
                    </a>
                ))
            }
        </Box>
    )
}



const data =
    [
        { name: 1, link: "https://www.ime.co.ir/" },
        { name: 2, link: "https://www.seo.ir/" },
        { name: 9, link: "",src:'/assets/images/p7@2x.png' },
        { name: 4, link: "https://www.seba.ir/" },
        { name: 5, link: "https://www.sena.ir/" },
        { name: 6, link: "http://www.tsetmc.com/" }, 
        { name: 7, link: "https://codal.ir/" },
        { name: 8, link: "https://www.lme.com/" },
        { name: 9, link: "https://csdiran.ir/" },
        // { name: 3, link: "" },
    ]
