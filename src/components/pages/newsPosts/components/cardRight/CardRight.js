import React, { useEffect, useState } from "react";
import {
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { dateMiladiToShamsi } from "../../../../method/date";
import { actionTypes as actionTypesNewsAttachment } from "../../../../../redux/news/news_attachment_select";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    // ["@media (max-width:1279)"]: {
    //   // eslint-disable-line no-useless-computed-key
    //   width: "280px",
    // },

    [theme.breakpoints.down("lg")]: {
      width: "280px",
    },
  },
  cardParent: {
    width: "100%",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  text: {
    fontSize: "12px !important",
    marginBottom: "5px",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  parentCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  res: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center",
    },
    padding: "0 20px",
    cursor: "pointer",
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      padding: "0 40px",
    },
  },
  parentRight: {
    marginBottom: "50px",
  },
}));

const CardRight = ({ stateReducerAttchament, stateReducer }) => {
  const clasess = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const [state1, setState1] = useState(null);

  // const stateReducer = useSelector((state) => state.news_select_reducer);

  useEffect(() => {
    setState(stateReducerAttchament.data[0]?.body);
    setState1(stateReducer.data);
  }, [stateReducerAttchament]);
  const handleClickPush = (e, value) => {
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

  return (
    <>
      <Grid xs={12} lg={9} className={clasess.parentRight}>
        {stateReducerAttchament.loading ? (
          <CircularProgress />
        ) : (
          <>
            <div className={clasess.container} style={{ marginBottom: "80px" }}>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {state?.title}
              </Typography>
              <Card className={clasess.cardParent}>
                <CardMedia
                  component="img"
                  height="auto"
                  style={{ maxWidth: "100%" }}
                  image={`data:image/jpeg;base64,${state?.image}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                    {state?.full_description}
                  </Typography>
                </CardContent>
                {/*<CardActions>*/}
                {/*    <Button size="small">Share</Button>*/}
                {/*    <Button size="small">Learn More</Button>*/}
                {/*</CardActions>*/}
              </Card>
            </div>
            <div className={clasess.container}>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                اخبار مرتبط
              </Typography>
              <Grid container>
                {state1 && state
                  ? state1
                      .filter(
                        (itm, ind) =>
                          itm.body.category_name === state.category_name
                      )
                      .map((itm, ind) => (
                        <Grid
                          className={clasess.res}
                          item
                          xs={12}
                          md={6}
                          lg={4}
                          onClick={(e) => handleClickPush(e, itm)}
                        >
                          {" "}
                          <Card className={clasess.card} sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              height="auto"
                              style={{ maxWidth: "100%" }}
                              image={`data:image/jpeg;base64,${itm.body.image}`}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                className={clasess.text}
                                color="textSecondary"
                              >
                                {dateMiladiToShamsi(itm.body.create_date)}
                              </Typography>
                              <Typography style={{ fontWeight: "bold" }}>
                                {itm.body.title}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))
                      .slice(0, 3)
                  : null}
              </Grid>
            </div>
          </>
        )}
      </Grid>
    </>
  );
};

export default CardRight;
