import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { dateMiladiToShamsi } from "../../../../method/date";
import { useHistory } from "react-router-dom";
import { actionTypes as actionTypesNewsAttachment } from "../../../../../redux/news/news_attachment_select";
import { useDispatch } from "react-redux";
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
    fontWeight: "400",
    color: "#a7a7a7",
  },
  grid: {
    padding: "10px",
    cursor: "pointer",
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
  eliips: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
const CardsLeft = ({ data }) => {
  const dispatch = useDispatch();
  let { push } = useHistory();
  const handleClickPush = (e, value) => {
    push({
      pathname: "/NewsDetails",
      state: value,
    });
    let _data = {
      data: {
        _id: value.id,
      },
    };

    dispatch({
      type: actionTypesNewsAttachment.selectNewsAttachmentAsync,
      payload: _data,
    });
  };
  const classes = useStyles();
  return (
    <>
      {data.loading ? null : (
        <Grid xs={12} lg={3} className={classes.res}>
          <div className={classes.col}>
            <div>
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
                    ?.sort((a, b) => b.body.views_count - a.body.views_count)
                    .slice(0, 3)
                    .map((itm, ind) => (
                      <Grid container onClick={(e) => handleClickPush(e, itm)}>
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
                          <Typography
                            style={{ fontWeight: "bold" }}
                            className={classes.eliips}
                          >
                            {itm.body.title}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      )}
    </>
  );
};

export default CardsLeft;
