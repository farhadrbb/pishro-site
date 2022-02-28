import { Backdrop, Box, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../layout";
import TableBourse from "./table";
import { actionTypes as bourseMainGroup } from "../../../redux/bourse/select_main_groups";
import { actionTypes as bourseCategory } from "../../../redux/bourse/select_categories";
import { actionTypes as bourseSubCategory } from "../../../redux/bourse/subCategory";
import { actionTypes as bourseInstrumnts } from "../../../redux/bourse/select_instruments";
import { actionTypes as bourseproducer } from "../../../redux/bourse/select_producer";
import { actionTypes as pdf } from "../../../redux/bourse/select_instruments_pdf";
import { convertDigitToEnglish } from "../../method/convertDigitToEnglish";
import Filter from "./Filter";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./pdf2";
import styles from "./pdf2/main/index.module.scss";
import ButtonPdf from "./Button";
import Modal2 from "./modal2";
import { dateMiladiToShamsi } from "../../method/date";
import { TreeItem } from "@material-ui/lab";
// import Timer from "../../common/timer";
let pdfUef = false;
const useStyles = makeStyles((theme) => ({
  style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "200px",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: 8,
    padding: 4,
    overflowY: "auto",
    overflowX: "hideen",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    "@media (min-width: 0) and (max-width: 500px)": {
      width: "320px",
    },
  },
  style2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "950px",
    height: "420px",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: 8,
    padding: 4,
    overflowY: "auto",
    overflowX: "hideen",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-around",
    // alignItems: "center",
    "@media (min-width: 0) and (max-width: 575px)": {
      // width: "350px",
      width: "95%",
      height: "600px",
    },
    "@media (min-width: 576px) and (max-width: 767px)": {
      width: "560px",
      height: "470px",
    },
    "@media (min-width: 768px) and (max-width: 992px)": {
      width: "680px",
      height: "490px",
    },
    [theme.breakpoints.down('xs')]: {
      width: '98%',
    },
  },
  loading: {
    // width: "100%",
    // height: "110vh",
    backgroundColor: "rgba(0, 0, 0, 0.507)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10000000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white !important",
    fontSize: 25,
    "@media (min-width: 0) and (max-width: 992px)": {
      height: "110vh",
      fontSize: 20,
    },
  },
  titleModal: {
    width: "80%",
    height: 45,
    fontSize: 18,

    borderRadius: 6,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    color: "black",
  },
  backdrop: {
    zIndex: 10000000,
    backgroundColor: "rgba(0, 0, 0, 0.750)",
    // backgroundColor:'rgba(255, 255, 255, 0.800)',
    "@media (min-width: 0) and (max-width: 992px)": {
      fontSize: 20,
    },
  },
}));

let flagOne = false;

const Bourse = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // -------------------------------------state------------------------------------

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [stateFilter, setstateFilter] = useState({
    from_date: null,
    to_date: null,
    main_category: "",
    category: "",
    sub_category: "",
    producer: "",
    sort: "",
  });
  const [FlagFilter, setFlagFilter] = useState(false);
  const [mainCategory, setMainCategory] = useState(null);
  const [subCategory, setsubCategory] = useState(null);
  const [getCodeSubCategoryState, setgetCodeSubCategoryState] = useState(null);
  const [producer, setproducer] = useState(null);
  const [mainGroup, setmainGroup] = useState(null);
  const [totalPdf, settotalPdf] = useState([]);
  const [open2, setOpen2] = React.useState(false);
  const [flag, setflag] = useState(false);
  const [flagRefresh, setflagRefresh] = useState(false);
  const [arrayState, setarrayState] = useState([]);
  const [titleModal, settitleModal] = useState(false);
  const [backDrop, setbackDrop] = useState(false);
  const [stateFilterPage, setstateFilterPage] = useState({
    from_date: null,
    to_date: null,
    main_category: "",
    category: "",
    sub_category: "",
    producer: "",
    sort: "",
  });
  const [timePdf, settimePdf] = useState(0);
  const [statePDf, setstatePDf] = useState({
    ...stateFilter,
    from_date: null,
    to_date: null,
  });

  const [statePdfStart, setstatePdfStart] = useState(false);
  const [TimePdf, setTimePdf] = useState(0)

  let clickRef = useRef(null);

  // -------------------------------------useSelector------------------------------------

  const bourseMainGroupReducer = useSelector(
    (state) => state.bourse_select_mainGroup_reducer
  );
  const boursecategory = useSelector(
    (state) => state.bourse_select_category_reducer
  );
  const bourseSubcategory = useSelector(
    (state) => state.bourse_select_subCategory_reducer
  );
  const bourseInstruments = useSelector(
    (state) => state.bourse_select_instruments_reducer
  );
  const bourseProducer = useSelector(
    (state) => state.bourse_select_producer_reducer
  );
  const bourseInstrumentsPdf = useSelector(
    (state) => state.bourse_select_instruments_pdf_reducer
  );

  // -------------------------------------fuctionApi------------------------------------
  const apiCallMainGroup = () => {
    dispatch({
      type: bourseMainGroup.selectMainGroupsBourseAsync,
      payload: {},
    });
  };
  const apiCallCategory = () => {
    let data = {
      main_category: mainCategory?.code,
    };
    dispatch({
      type: bourseCategory.selectCategortyBourseAsync,
      payload: { data },
    });
  };
  const apiCallSubCategory = () => {
    let data = {
      main_category: mainCategory?.code,
      sub_category: subCategory?.code,
    };
    dispatch({
      type: bourseSubCategory.selectSubCategortyBourseAsync,
      payload: { data },
    });
  };
  const apiCallInstrumentsPdf = () => {
    let obj = {};
    Object.keys(statePDf).forEach((element) => {
      if (statePDf[element]) {
        obj[element] = statePDf[element];
      }
    });


    let data = { ...obj };
    dispatch({
      type: pdf.selectInstrumentsPdfAsync,
      payload: { data },
    });
  };
  const apiCallInstruments = () => {
    let { size } = bourseInstruments;
    let obj = {};
    let from = page;

    Object.keys(stateFilter).forEach((element) => {
      if (stateFilter[element]) {
        obj[element] = stateFilter[element];
      }
    });

    let data = { ...obj };

    dispatch({
      type: bourseInstrumnts.selectInstrumentsAsync,
      payload: { data, size, from },
    });
  };

  const apiCallInstrumentsPage = () => {
    let { size } = bourseInstruments;
    let obj = {};
    let from = page;

    Object.keys(stateFilterPage).forEach((element) => {
      if (stateFilterPage[element]) {
        obj[element] = stateFilterPage[element];
      }
    });

    let data = { ...obj };

    dispatch({
      type: bourseInstrumnts.selectInstrumentsAsync,
      payload: { data, size, from },
    });
  };

  const apiCallProducer = () => {
    dispatch({ type: bourseproducer.selectProducerAsync, payload: {} });
  };

  const handleSubmit = () => {
    setstateFilterPage(stateFilter);
    setPage(0);
    apiCallInstruments();
  };

  // -------------------------------------useEffect------------------------------------

  useEffect(() => {
    apiCallMainGroup();
    apiCallInstruments();
    apiCallProducer();
  }, []);

  useEffect(() => {
    apiCallInstrumentsPage();
  }, [page]);

  useEffect(() => {
    if (mainCategory) {
      apiCallCategory();
    } else {
      dispatch({ type: bourseCategory.selectCategortyBourseEmpty });
    }
    setstateFilter((prev) => ({
      ...prev,
      main_category: mainCategory?.code,
    }));
  }, [mainCategory]);

  useEffect(() => {
    if (subCategory) {
      apiCallSubCategory();
    } else {
      dispatch({ type: bourseSubCategory.selectSubCategortyBourseEmpty });
    }
    setstateFilter((prev) => ({
      ...prev,
      category: subCategory?.code,
    }));
  }, [subCategory]);

  useEffect(() => {
    setstateFilter((prev) => ({
      ...prev,
      sub_category: getCodeSubCategoryState?.code,
    }));
  }, [getCodeSubCategoryState]);

  useEffect(() => {
    setstateFilter((prev) => ({
      ...prev,
      producer: producer?.code,
    }));
  }, [producer]);
  useEffect(() => {
    apiCallInstruments();
  }, [flagRefresh]);

  

  useEffect(() => {
    let total = Math.ceil(bourseInstrumentsPdf.total / 6);
    let data = [];
    for (let index = 0; index < total; index++) {
      data.push(index.toString());
    }
    settotalPdf(data);
  }, [bourseInstrumentsPdf.total]);

  useEffect(() => {
    handelTextSharh();
  }, [bourseInstrumentsPdf]);

  useEffect(() => {
    setstatePDf({
      ...stateFilter,
   
    });
  }, [stateFilter]);

  // -------------------------------handleFunction----------------------------

  const handleFlagFilter = () => {
    flagOne = true;
    setFlagFilter((prev) => !prev);
  };

  const handleChange = (event, value, type) => {
    if (!value) {
      setmainGroup(null);
      setMainCategory(null);
      setsubCategory(null);
      setsubCategory(null);
      setgetCodeSubCategoryState(null);
    } else {
      setMainCategory(value);
      setmainGroup(value);
      setsubCategory(null);
      setgetCodeSubCategoryState(null);
    }
  };
  const handleChangeCategory = (event, value, type) => {
    if (!value) {
      setsubCategory(null);
      setgetCodeSubCategoryState(null);
    } else {
      setsubCategory(value);
      setgetCodeSubCategoryState(null);
    }
  };

  const getCodeSubCategory = (event, value, type) => {
    if (!value) {
      setgetCodeSubCategoryState(null);
    } else {
      setgetCodeSubCategoryState(value);
    }
  };

  const handleChangeProducer = (event, value, type) => {
    if (!value) {
      setproducer(null);
    } else {
      setproducer(value);
    }
  };

  const handleExit = () => {
    handleRefresh();
    flagOne = true;
    setFlagFilter((prev) => !prev);
  };

  const handelChangeDate = (data, type) => {
    if (data) {
    }
    let date = convertDigitToEnglish(data?.format("YYYY/MM/DD"));
    date = `${date} 00:00:00.000000`;
    setstateFilter((prev) => ({
      ...prev,
      [type]: date,
    }));
  };
  const handelChangeDatePdf = (data, type) => {
    if (data) {
    }
    let date = convertDigitToEnglish(data?.format("YYYY/MM/DD"));
    date = `${date} 00:00:00.000000`;
    setstatePDf((prev) => ({
      ...prev,
      to_date: date,
      from_date: date,
    }));
  };

  const handleFlagPdf = () => {
    setbackDrop(true);
    handleCloseDownLoad();

   
  };

  const handleRefresh = () => {
    settitleModal(false);
    setmainGroup(null);
    setMainCategory(null);
    setsubCategory(null);
    setproducer(null);
    setgetCodeSubCategoryState(null);
    setstateFilter({
      from_date: null,
      to_date: null,
      main_category: "",
      category: "",
      sub_category: "",
      producer: "",
      sort: "",
    });
    setstateFilterPage({
      from_date: null,
      to_date: null,
      main_category: "",
      category: "",
      sub_category: "",
      producer: "",
      sort: "",
    });
    setstatePDf({
      ...stateFilter,
      from_date: null,
      to_date: null,
    });
    setPage(0);
    setflagRefresh((prev) => !prev);
  };

 

  const handleClose = () => {
    setflag(false);
    settitleModal(false);
  };

  useEffect(() => {
    return function cleanUp() {
      return (flagOne = false);
    };
  }, []);
  let height = document.body.clientHeight;
  let width = document.body.clientWidth;

  useEffect(() => {}, [height, width]);

  const handelTextSharh = () => {
    let data = [];
    let array = [];
    let object = {};
    let obj = {};

    let kalame = bourseInstrumentsPdf?.data?.map((itm, ind) => {
      let count = 0;
      data = itm.bArzehRadifArzehSharh.split(" ");
      for (let index = 0; index <= data.length; index++) {
        count++;
        let startPos = index * 18;
        let endPos = index * 18 + 18;
        let info = "";

        if (index === 0) {
          info += data.slice(0, 18);
        } else {
          info += data.slice(startPos, endPos);
        }
       
        if (info !== "" || info !== " " || info !== "  ") {
          let text = info
            .replaceAll(",", " ")
            .replaceAll("\r\n", " ")
            .replaceAll("\r", " ")
            .replaceAll("\n", " ")
            .replaceAll("\t", " ")
            .replaceAll("(", " ")
            .replaceAll(")", " ")
            .replaceAll("R"," ")
            .replaceAll("I"," ")
            .replaceAll("1","۱")
            .replaceAll("2","۲")
            .replaceAll("3","۳")
            .replaceAll("4","۴")
            .replaceAll("5","۵")
            .replaceAll("6","۶")
            .replaceAll("7","۷")
            .replaceAll("8","۸")
            .replaceAll("9","۹")
            .replaceAll("0","۰")



          obj = {
            [count]: `${text}`,
          };
          object = {
            ...object,
            ...obj,
          };
        }
      }

      return {
        ...itm,
        text: object,
      };
    });

    setarrayState(kalame);
  };

 
  const handelOpen2 = () => {
    setOpen2(true);
    let obj = {};
    for (const key in stateFilter) {
      if (stateFilter[key]) {
        obj[key] = stateFilter[key];
      }
    }
    if (obj.from_date || obj.to_date) {
      setstatePDf((prev) => ({
        ...prev,
        from_date: null,
        to_date: null,
      }));
    }
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  

  const handleCloseDownLoad = () => {
    apiCallInstrumentsPdf();
  };

  useEffect(() => {
    if (bourseInstrumentsPdf.data.length > 0) {
      setstatePdfStart(true);

    } else {
      if (pdfUef) {
        setbackDrop(false);
        alert("اطلاعاتی وجود ندارد");
      }
    }
    pdfUef = true;
  }, [bourseInstrumentsPdf.data]);

  useEffect(() => {
    return () => {
      pdfUef = false;
      settitleModal(false);
      dispatch({type:pdf.selectInstrumentsLoadPdfEmpty})
    }
  }, [])

  useEffect(() => {
    if (statePdfStart) {
      handleLoaing();
    }
  }, [statePdfStart]);

  function handleLoaing() {
    let myVar = setTimeout(alertFunc, 500);
  }

  function alertFunc() {
    
    settitleModal(true);
    let myVar = setTimeout(handleRef, 2000);
  }
 
  const handleRef = () => {
    if(!clickRef.current){
      if(timePdf > 10){
        alert("کاربر گرامی مشکلی به وجود آمده است. لطفا دوباره تلاش کنید")
        setTimePdf(0)
        return
      }
      setTimePdf(prev=> ++prev)
      alertFunc()
      return
    }
    setbackDrop(false);
    clickRef.current.click();
    let myVar = setTimeout(handleRefreshPdf, 50);
  };
  const handleRefreshPdf = () => {
    settitleModal(false);
    setstatePdfStart(false)
    setTimePdf(0)
    handleClose2();
  };

  // useEffect(()=>{ 
 
  //   return ()=>{
  //     pdfUef = false
  //     clickRef.current = true
  //   }
  // } ,[])

 

  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  let date = dateMiladiToShamsi(year + "/" + month + "/" + day);


  return (
    <>
      <Layout>
        <Box width="98%" margin="100px auto">
          <div style={{ direction: "rtl", textAlign: "center" }}></div>
          <div className="d-flex mb- w-100 flex-column">
            <ButtonPdf
              handleFlagFilter={handleFlagFilter}
              handleFlagPdf={handelOpen2}
              handleRefresh={handleRefresh}
              mainCategory={mainCategory}
              setflag={setflag}
              flag={flag}
              totalPdf={totalPdf}
              arrayState={arrayState}
              handleClose={handleClose}
              stateFilter={stateFilter}
              bourseInstrumentsPdf={bourseInstrumentsPdf}
            />
            {backDrop && (
              <Backdrop className={classes.backdrop} open={backDrop}>
                <div
                  style={{ fontSize: 25, fontWeight: 500, color: "white" }}
                  // className="text-light"
                >
                  در حال دانلود فایل PDF ...
                </div>
              </Backdrop>

            )}
            {titleModal && (
              <div className="d-flex w-100 justify-content-center opacity-0">
                <PDFDownloadLink
                  document={
                    <MyDocument
                      mainCategory={mainCategory}
                      mainGroup={mainGroup}
                      subCategory={subCategory}
                      getCodeSubCategory={getCodeSubCategory}
                      producer={producer}
                      statePDf={statePDf}
                      setflag={setflag}
                      flag={flag}
                      totalPdf={totalPdf}
                      bourseInstruments={arrayState}
                      handleClose={handleClose}
                      stateFilter={stateFilter}
                      date={date}
                    />
                  }
                  fileName="bourseKala.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      <button className={styles["modalBtnGreen"]}>
                        در حال بارگذاری
                      </button>
                    ) : (
                      <button
                        className={styles["modalBtnGreen"]}
                        // onClick={handleCloseDownLoad}
                        ref={clickRef}
                      >
                        دانلود
                      </button>
                    )
                  }
                </PDFDownloadLink>

                <button
                  className={styles["modalBtnRed"]}
                  onClick={handleClose}
                  style={{ marginRight: 10 }}
                >
                  لغو
                </button>
              </div>
            )}

            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <>
             
                <div>
                  <Box className={classes.style2}>
                    <Modal2
                      handelChangeDatePdf={handelChangeDatePdf}
                      setstatePDf={setstatePDf}
                      statePDf={statePDf}
                      bourseMainGroupReducer={bourseMainGroupReducer}
                      handleChange={handleChange}
                      handleChangeCategory={handleChangeCategory}
                      mainCategory={mainCategory}
                      boursecategory={boursecategory}
                      bourseSubcategory={bourseSubcategory}
                      subCategory={subCategory}
                      bourseProducer={bourseProducer}
                      getCodeSubCategory={getCodeSubCategory}
                      getCodeSubCategoryState={getCodeSubCategoryState}
                      handleChangeProducer={handleChangeProducer}
                      handleSubmit={handleSubmit}
                      handleExit={handleExit}
                      handelChangeDate={handelChangeDate}
                      stateFilter={stateFilter}
                      setstateFilter={setstateFilter}
                      FlagFilter={FlagFilter}
                      flag={flagOne}
                      producer={producer}
                      mainGroup={mainGroup}
                      handleFlagPdf={handleFlagPdf}
                      handleClose2={handleClose2}
                    />
                  </Box>
                </div>
              
              </>
            </Modal>

            <Filter
              bourseMainGroupReducer={bourseMainGroupReducer}
              handleChange={handleChange}
              handleChangeCategory={handleChangeCategory}
              mainCategory={mainCategory}
              boursecategory={boursecategory}
              bourseSubcategory={bourseSubcategory}
              subCategory={subCategory}
              bourseProducer={bourseProducer}
              getCodeSubCategory={getCodeSubCategory}
              getCodeSubCategoryState={getCodeSubCategoryState}
              handleChangeProducer={handleChangeProducer}
              handleSubmit={handleSubmit}
              handleExit={handleExit}
              handelChangeDate={handelChangeDate}
              stateFilter={stateFilter}
              setstateFilter={setstateFilter}
              FlagFilter={FlagFilter}
              flag={flagOne}
              producer={producer}
              mainGroup={mainGroup}
            />
          </div>
          <TableBourse
            bourseInstruments={bourseInstruments}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Box>
      </Layout>
    </>
  );
};

export default Bourse;
