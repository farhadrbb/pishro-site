import { Box, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import DatePicker from "../../../common/datePicker";
import Input from './input'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#CD2F4E",
    color: "white",
    border: 0,
    borderRadius: "0 9px 9px 9px",
    marginRight: 10,
    width: 90,
    height: 35,
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    [theme.breakpoints.down("md")]: {
      width: 120,
      height: 40,
    },
  },
  button2: {
    backgroundColor: "#64a51c",
    color: "white",
    border: 0,
    borderRadius: "0 9px 9px 9px",
    marginRight: 10,
    width: 90,
    height: 35,
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    [theme.breakpoints.down("md")]: {
      width: 120,
      height: 40,
    },
  },

  block: {
    width: "100%",
    height: 0,
    visibility: "hidden",
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  },
  // div:{
  //   display: 'grid',
  //   // gridColumnGap: '50px'
  //   backgroundColor:'white',
  //   gridTemplateColumns: 'auto auto auto auto auto auto',
  //   // backgroundColor: '#2196F3',
  //   padding: 10,
  //   ['@media (max-width:1800px)']: { // eslint-disable-line no-useless-computed-key
  //     gridTemplateColumns: 'auto auto auto auto auto',
  //   },
  //   ['@media (max-width:1800px)']: { // eslint-disable-line no-useless-computed-key
  //     gridTemplateColumns: 'auto auto auto auto',
  //   },
  // },

  none: {
    width: "100%",
    height: 0,
    visibility: "hidden",
    opacity: 0,
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    animation: "$fadeOut 0.4s",
    "@media (min-width:300px) and (max-width:767px)": {
      animation: "$fadeOutSm 0.4s",
    },
    "@media (min-width:768px) and (max-width:992px)": {
      animation: "$fadeOutMd 0.4s",
    },
    "@media (min-width:991px) and (max-width:1650px)": {
      animation: "$fadeOutLg 0.4s",
    },
  },
  transform:{
  "@media (min-width:300px) and (max-width:767px)": {
      transform:'scale(0.8,0.8)',
    },
  },

  filter: {
    width: "100%",
    height: 150,
    visibility: "visible",
    opacity: 1,
    borderRadius: 10,
    boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    animation: "$fadeIn 0.4s",
    ["@media (min-width:280px) and (max-width:767px)"]: {
      height: 530,
      animation: "$fadeInSm 0.4s",
    },
    "@media (min-width:768px) and (max-width:991px)": {
      height: 300,
      animation: "$fadeInMd 0.4s",
    },
    "@media (min-width:991px) and (max-width:1650px)": {
      height: 250,
      animation: "$fadeInLg 0.4s",
    },
    // ['@media (min-width:780px)']: {
    //   height: 300,
    //   animation: "$fadeInSm 0.4s",
    // },
    // ['@media (min-width:780px)']: {
    //   height: 200,
    //   animation: "$fadeInSm 0.4s",
    // },
  },

  "@keyframes fadeIn": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      boxShadow: 0,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 150,
      boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeInMd": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      boxShadow: 0,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 300,
      boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeInSm": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      // transform: "translateY(5rem)"
    },

    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 530,
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeInLg": {
    "0%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      // transform: "translateY(5rem)"
    },

    "100%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 250,
      // transform: "translateY(0)"
    },
  },

  "@keyframes fadeOut": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 150,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: "0",
      
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeOutMd": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 300,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: 0,
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeOutSm": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 530,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: "0",
      // transform: "translateY(0)"
    },
  },
  "@keyframes fadeOutLg": {
    "0%": {
      visibility: "visible",
      opacity: 1,
      width: "100%",
      height: 250,
      // transform: "translateY(5rem)"
    },
    "100%": {
      visibility: "hidden",
      opacity: 0,
      width: "100%",
      height: "0",
      // transform: "translateY(0)"
    },
  },
}));

const Index = ({
  bourseMainGroupReducer,
  handleChange,
  mainCategory,
  boursecategory,
  bourseSubcategory,
  handleChangeCategory,
  subCategory,
  bourseProducer,
  getCodeSubCategory,
  getCodeSubCategoryState,
  handleChangeProducer,
  handleSubmit,
  handleExit,
  handelChangeDate,
  stateFilter,
  FlagFilter,
  flag,
  producer,
  mainGroup,
  setstateFilter,
}) => {
  const classes = useStyles();
  // const [dateMin, setdateMin] = useState();
  // const [dateMax, setdateMax] = useState();

  let category = subCategory;
  let textGetSubcategory = getCodeSubCategoryState;
  let textproducer = producer;
  let textmainGroup = mainGroup;

  useEffect(() => {
    if (subCategory === null) {
      category = "";
    }
  }, [subCategory, subCategory]);

  useEffect(() => {
    if (getCodeSubCategoryState === null) {
      textGetSubcategory = "";
    }
  }, [getCodeSubCategoryState]);

  useEffect(() => {
    textproducer = "";
  }, [textproducer]);

  useEffect(() => {
    textmainGroup = "";
  }, [textmainGroup]);

  useEffect(() => {
    if (stateFilter.from_date) {
      if (stateFilter.from_date.includes("undefined")) {
        setstateFilter((prev) => ({
          ...prev,
          from_date: null,
        }));
      }
    }
  }, [stateFilter.from_date]);
  useEffect(() => {
    if (stateFilter.to_date) {
      if (stateFilter.to_date.includes("undefined")) {
        setstateFilter((prev) => ({
          ...prev,
          to_date: null,
        }));
      }
    }
  }, [stateFilter.to_date]);
  // useEffect(() => {
  //   let days = new Date();
  //   days.setDate(days.getDate()-2);
  //   setdateMin(days);
  // }, []);
  // useEffect(() => {
  //   let days = new Date();
  //   days.setDate(days.getDate()+2);
  //   setdateMax(days);
  // }, []);


  return (
    <>
      <div
        className={
          FlagFilter
            ? classes.filter
            : flag === false
            ? classes.block
            : classes.none
        }
      >
        <div className="d-flex justify-align-content-around justify-content-sm-start   align-items-center p-3 flex-column flex-md-wrap flex-grow-1 flex-md-row w-100 h-100 position-relative mt-2">
          {/* <div className={classes.div}> */}
         <Input 
           bourseMainGroupReducer={bourseMainGroupReducer}
           handleChange={handleChange}
           mainCategory={mainCategory}
           boursecategory={boursecategory}
           bourseSubcategory={bourseSubcategory}
           handleChangeCategory={handleChangeCategory}
           subCategory={subCategory}
           bourseProducer={bourseProducer}
           getCodeSubCategory={getCodeSubCategory}
           getCodeSubCategoryState={getCodeSubCategoryState}
           handleChangeProducer={handleChangeProducer}
           handleSubmit={handleSubmit}
           handleExit={handleExit}
           handelChangeDate={handelChangeDate}
           stateFilter={stateFilter}
           FlagFilter={FlagFilter}
           flag={flag}
           producer={producer}
           mainGroup={mainGroup}
           setstateFilter={setstateFilter}
         />
          <div className="w-100 d-flex justify-content-md-end justify-content-center pe-2">
            <button
              onClick={handleSubmit}
              className={classes.button2}
              style={{ backgroundColor: "#64a51c" }}
            >
              تایید
            </button>
            <button onClick={handleExit} className={classes.button}>
              لغو
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
