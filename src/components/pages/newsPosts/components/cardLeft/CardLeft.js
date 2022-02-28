import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dateMiladiToShamsi } from "../../../../method/date";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  parent: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    borderRadius: "15px",

    marginBottom: "50px",
    width: "100%",
    padding: "15px",
    [theme.breakpoints.up("md")]: {
      width: "550px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  text: {
    fontSize: "12px",
    color: "#a7a7a7",
    fontWeight: "400",
  },
  grid: {
    padding: "10px",
  },
  col: {
    // width: "80%",
    width: "100%",
  },
  res: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-end",
    },
  },
}));
const CardLeft = ({ data }) => {
  const classes = useStyles();
  const [viewCount, setViewCount] = useState([]);
  let { push } = useHistory();
  const handleClickPush = (e, value) => {
    push({
      pathname: "/NewsDetails",
      state: value,
    });
  };

  // useEffect(() => {
  //   let count = [];
  //   let allData = [];
  //
  //   data.data.sort((a, b) => {});
  //
  //   data.data.map((itm) => count.push(itm.body.views_count));
  //
  //   let array = count
  //     .sort((a, b) => {
  //       return b - a;
  //     })
  //     .slice(0, 3);
  //
  //   array.map((item) => {
  //     allData = data.data.filter((itm) => itm.body.views_count === item);
  //   });
  //   setViewCount(allData);
  // }, [data]);

  return (
    <>
      <Grid xs={12} lg={3} className={classes.res}>
        <div className={classes.col}>
          <Typography
            variant="h5"
            // style={{ fontSize: "19px", fontWeight: "bold" }}
            className={classes.title}
          >
            پر بازدیدترین ها
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={classes.parent}>
              {data.data
                .sort((a, b) => b.body.views_count - b.body.views_count)
                .slice(0, 3)
                .map((itm, ind) => (
                  <Grid
                    container
                    onClick={(e) =>
                      handleClickPush(e, {
                        des: itm.body.short_description,
                        img: itm.body.image,
                      })
                    }
                  >
                    {/*{viewCount.length!==0?viewCount.map((itm,ind)=>)}*/}
                    <Grid item xs={5} className={classes.grid}>
                      <img
                        src={`data:image/jpeg;base64,${itm.body.image}`}
                        alt=""
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          width: "200px",
                        }}
                      />
                    </Grid>
                    <Grid xs={7} className={classes.grid}>
                      <Typography
                        className={classes.text}
                        color="textSecondary"
                      >
                        {dateMiladiToShamsi(itm.body.create_date)}
                      </Typography>
                      <Typography style={{ fontWeight: "bold" }}>
                        {itm.body.title}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default CardLeft;
