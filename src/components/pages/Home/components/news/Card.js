import React, { Fragment } from "react";
import {
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { dateMiladiToShamsi } from "../../../../method/date";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes as actionTypesNewsAttachment } from "../../../../../redux/news/news_attachment_select";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { convertNumberToPersian } from "../../../../method/convertDigitToEnglish";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "288px",
    width: "327px",
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
    width: "250px",
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

const CardsRight = ({ data }) => {
  const clasess = useStyles();
  const dispatch = useDispatch();
  let { push } = useHistory();

  const handleClickPush = (e, value) => {
    push({
      pathname: "/NewsDetails",
      state: value,
    });
    window.scrollTo(100, 0);
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

  const breakPoints = [
    { width: 1, itemsToShow: 1.1 },
    {
      width: 550,
      itemsToShow: 1,
      // , itemsToScroll: 2
    },
    { width: 768, itemsToShow: 2 },
    { width: 1250, itemsToShow: 3 },
  ];

  return (
    <>
      {/* <Grid xs={12} lg={9} style={{ marginBottom: "50px" }}>
                <Grid container className={clasess.container}> */}
      {/*<Carousel breakPoints={breakPoints} pagination={false}>*/}
      {/*  {data.map((itm, ind) => (*/}
      {/*    <Fragment key={ind}>*/}
      {/*      <Grid*/}
      {/*        className={clasess.res}*/}
      {/*        item*/}
      {/*        // xs={12}*/}
      {/*        // md={6}*/}
      {/*        // lg={4}*/}
      {/*        onClick={(e) => handleClickPush(e, itm)}*/}
      {/*      >*/}
      {/*        {" "}*/}
      {/*        <Card className={clasess.card}>*/}
      {/*          <div style={{ height: "195px" }}>*/}
      {/*            <CardMedia*/}
      {/*              component="img"*/}
      {/*              height="auto"*/}
      {/*              style={{ maxWidth: "100%" }}*/}
      {/*              image={`data:image/jpeg;base64,${itm.body.image}`}*/}
      {/*              alt="green iguana"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <CardContent>*/}
      {/*            <Typography className={clasess.text} color="textSecondary">*/}
      {/*              {dateMiladiToShamsi(itm.body.create_date)}*/}
      {/*            </Typography>*/}
      {/*            <Typography className={clasess.title}>*/}
      {/*              <span style={{ display: "block", direction: "rtl" }}>*/}
      {/*                {itm.body.title}*/}
      {/*              </span>*/}
      {/*            </Typography>*/}
      {/*          </CardContent>*/}
      {/*        </Card>*/}
      {/*      </Grid>*/}
      {/*    </Fragment>*/}
      {/*  ))}*/}
      {/*</Carousel>*/}

      {/*<Carousel breakPoints={breakPoints} pagination={false}>*/}
      {/*  {data.map((itm, ind) => (*/}
      {/*    <Fragment key={ind}>*/}
      {/*      <Grid*/}
      {/*        className={clasess.res}*/}
      {/*        item*/}
      {/*        // xs={12}*/}
      {/*        // md={6}*/}
      {/*        // lg={4}*/}
      {/*        // onClick={(e) => handleClickPush(e, itm)}*/}
      {/*      >*/}
      {/*        {" "}*/}
      {/*        <Card className={clasess.card}>*/}
      {/*          <div style={{ height: "195px" }}>*/}
      {/*            <CardMedia*/}
      {/*              component="img"*/}
      {/*              height="auto"*/}
      {/*              style={{ maxWidth: "100%" }}*/}
      {/*              image={`data:image/jpeg;base64,${itm.body.image}`}*/}
      {/*              alt="green iguana"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <CardContent>*/}
      {/*            <Typography className={clasess.text} color="textSecondary">*/}
      {/*              {dateMiladiToShamsi(itm.body.create_date)}*/}
      {/*            </Typography>*/}
      {/*            <Typography className={clasess.title}>*/}
      {/*              <span style={{ display: "block", direction: "rtl" }}>*/}
      {/*                {itm.body.title}*/}
      {/*              </span>*/}
      {/*            </Typography>*/}
      {/*          </CardContent>*/}
      {/*        </Card>*/}
      {/*      </Grid>*/}
      {/*    </Fragment>*/}
      {/*  ))}*/}
      {/*</Carousel>*/}
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
        }}
        slidesPerView={3}
        spaceBetween={5}
        className="mySwiper"
      >
        {/*{giftData.load && (*/}
        {/*    <div>*/}
        {/*      <LinearProgress />*/}
        {/*    </div>*/}
        {/*)}*/}

        {data?.map((itm, ind) => (
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <Fragment key={ind}>
              <Grid
                className={clasess.res}
                item
                // xs={12}
                // md={6}
                // lg={4}
                onClick={(e) => handleClickPush(e, itm)}
              >
                {" "}
                <Card className={`shadow ${clasess.card}`}>
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
                    <Typography className={clasess.text} color="textSecondary">
                      {convertNumberToPersian(
                        dateMiladiToShamsi(itm.body.create_date)
                      )}
                    </Typography>
                    <Typography className={clasess.title}>
                      <span
                        style={{
                          display: "block",
                          direction: "rtl",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {itm.body.title}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Fragment>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<Swiper*/}
      {/*  spaceBetween={50}*/}
      {/*  slidesPerView={3}*/}
      {/*  onSlideChange={() => console.log("slide change")}*/}
      {/*  onSwiper={(swiper) => console.log(swiper)}*/}
      {/*>*/}
      {/*  <SwiperSlide>*/}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*    */}
      {/*  </SwiperSlide>*/}

      {/*</Swiper>*/}
      {/* </Grid> */}
      {/* <div className={clasess.paginationParent}>
                    {" "}
                    <Pagination
                        count={pagnation.count}
                        color="secondary"
                        onChange={handleChangePagination}
                    />
                </div> */}
      {/* </Grid> */}
    </>
  );
};

export default CardsRight;
