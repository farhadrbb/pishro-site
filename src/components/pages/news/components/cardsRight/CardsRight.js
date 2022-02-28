import React from "react";
import {
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { dateMiladiToShamsi } from "../../../../method/date";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes as actionTypesNewsAttachment } from "../../../../../redux/news/news_attachment_select";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "288px",
    width: "100%",
    borderRadius: "15px",
    marginBottom: "30px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    // ["@media (max-width:1279)"]: {
    //   // eslint-disable-line no-useless-computed-key
    //   width: "280px",
    // },
    [theme.breakpoints.down("lg")]: {
      width: "280px",
    },
  },
  text: {
    fontSize: "12px !important",
    marginBottom: "5px",
    fontWeight: "400",
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
  title: {
    fontWeight: "700",
    fontSize: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      padding: "0 20px",
    },
    marginBottom: "20px",
  },
  paginationParent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const CardsRight = ({ data, pagnation, setPagnation }) => {
  const clasess = useStyles();
  let { push } = useHistory();

  const dispatch = useDispatch();
  const handleChangePagination = (event, value) => {
    setPagnation((prev) => ({
      ...prev,
      number: value,
    }));
  };
  const handleClickPush = (e, value) => {
    let flag = false;
    push({
      pathname: "/NewsDetails",
      state: flag,
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

  return (
    <>
      <Grid xs={12} lg={9} style={{ marginBottom: "50px" }}>
        {data.loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <Grid container className={clasess.container}>
            {data.data?.map((itm, ind) => (
              <>
                <Grid
                  className={clasess.res}
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  onClick={(e) => handleClickPush(e, itm)}
                >
                  {" "}
                  <Card className={clasess.card}>
                    <div style={{ height: "195px" }}>
                      <CardMedia
                        component="img"
                        height="auto"
                        style={{ maxWidth: "100%" }}
                        image={`data:image/jpeg;base64,${itm.body.image}`}
                        alt="green iguana"
                      />
                    </div>
                    <CardContent>
                      <Typography
                        className={clasess.text}
                        color="textSecondary"
                      >
                        {dateMiladiToShamsi(itm.body.create_date)}
                      </Typography>
                      <Typography className={clasess.title}>
                        {itm.body.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
        )}

        {!data.loading && data.data.length !== 0 ? (
          <div className={clasess.paginationParent}>
            {" "}
            <Pagination
              count={pagnation.count}
              color="secondary"
              onChange={handleChangePagination}
            />
          </div>
        ) : null}
      </Grid>
    </>
  );
};

export default CardsRight;
