import React, { useEffect } from "react";
import Layout from "../../../layout";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardRight from "./components/cardRight/CardRight";
import CardLeft from "../news/components/cardsLeft/CardsLeft";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes as actionTypesNews } from "../../../redux/news/select_news";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "280px",
    borderRadius: "10px",
    marginLeft: "20px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
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
  parentDiv: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Index = () => {
  const clasess = useStyles();
  const dispatch = useDispatch();
  const stateReducer = useSelector((state) => state.news_select_reducer);
  const stateReducerAttchament = useSelector(
    (state) => state.news_select_Attachment_reducer
  );
  let location = useLocation();
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = () => {
    dispatch({ type: actionTypesNews.selectNewsAsync });
  };
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
          <CardRight
            state={location.state}
            stateReducer={stateReducer}
            stateReducerAttchament={stateReducerAttchament}
          />
          <CardLeft data={stateReducer} />
        </Grid>
      </div>
      {/*<CardsPost />*/}
    </Layout>
  );
};

export default Index;
