import React, { useEffect, useState } from "react";
import Layout from "../../../layout";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CardsRight from "./components/cardsRight/CardsRight";
import CardsLeft from "./components/cardsLeft/CardsLeft";
import { useDispatch, useSelector } from "react-redux";
import {
  actionTypes as actionTypesNews,
  news_select_reducer,
} from "../../../redux/news/select_news/index";
// import NewsPosts from "../newsPosts";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "12px !important",
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
}));
let flag = false;
let flagPosts = false;
const Index = () => {
  const clasess = useStyles();
  let { push } = useHistory();
  const dispatch = useDispatch();
  const stateReducer = useSelector((state) => state.news_select_reducer);
  const [pagnation, setPagnation] = useState({
    number: 1,
    count: 2,
  });

  const [flagApi, setflagApi] = useState(false);

  useEffect(() => {
    apiCall();
    return () => {
      flag = false;
    };
  }, [flagApi]);

  useEffect(() => {
    setPagnation((prevState) => ({
      ...prevState,
      count: Math.ceil(stateReducer.total / stateReducer.size),
    }));
  }, [stateReducer]);

  useEffect(() => {
    if (flag) {
      setflagApi((prevState) => !prevState);
    }
    flag = true;
  }, [pagnation.number]);

  const apiCall = () => {
    let { size } = stateReducer;
    let _data = {
      from: pagnation.number,
      size,
    };
    dispatch({ type: actionTypesNews.selectNewsAsync, payload: _data });
  };
  // const handleClickPush = (e, value) => {
  //   let flag = false;
  //   push({
  //     pathname: "/NewsDetails",
  //     state: flag,
  //   });
  //   let _data = {
  //     data: {
  //       _id: value.id,
  //     },
  //   };
  //
  //   dispatch({
  //     type: actionTypesNewsAttachment.selectNewsAttachmentAsync,
  //     payload: _data,
  //   });
  // };

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Grid
          container
          style={{
            width: "80%",
          }}
          className="mt-5"
        >
          <CardsRight
            data={stateReducer}
            pagnation={pagnation}
            setPagnation={setPagnation}
          />
          <CardsLeft data={stateReducer} />
        </Grid>
      </div>
    </Layout>
  );
};

export default Index;
