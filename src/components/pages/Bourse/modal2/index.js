import React, { useEffect } from "react";
import DatePicker from "../../../common/datePicker";
import styles from "../pdf2/main/index.module.scss";
import Input from "../Filter/input";

const Index = ({
  handelChangeDatePdf,
  setstatePDf,
  statePDf,
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
  handleFlagPdf,
  handleClose2,
}) => {
  useEffect(() => {
    if (statePDf.from_date) {
      if (statePDf.from_date.includes("undefined")) {
        setstatePDf((prev) => ({
          ...prev,
          from_date: null,
          to_date:null
        }));
      }
    }
  }, [statePDf.from_date]);
  useEffect(() => {
    if (statePDf.to_date) {
      if (statePDf.to_date.includes("undefined")) {
        setstatePDf((prev) => ({
          ...prev,
          to_date: null,
          from_date: null,
        }));
      }
    }
  }, [statePDf.to_date]);
  return (
    <>
      <div className="mt-4 mx-auto">
        <h5 className="text-center mb-5">دانلود فایل PDF</h5>
        <Input
          use={"modal2"}
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
          statePDf={statePDf}
          handelChangeDatePdf={handelChangeDatePdf}
        />
       
        <div className="d-flex justify-content-center " style={{marginTop:80}}>
          <button
            className={styles["modalBtnGreen"]}
            onClick={()=>handleFlagPdf()}
          >
            دانلود
          </button>
          <button
            className={styles["modalBtnRed"]}
            onClick={()=>handleClose2()}
            style={{ marginRight: 10 }}
          >
            لغو
          </button>
        </div>
      </div>
      {/* <h4 className="text-center mt-3 mb-5 text-success">دانلود فایل PDF</h4>
        <div className="d-flex justify-content-around w-100 mt-3">
          <fieldset>
            <legend style={{ fontSize: 18 }}>گروه اصلی:</legend>
            <div className="pe-5" style={{ color: "grey" }}>
              صنعتی
            </div>
          </fieldset>
          <fieldset>
            <legend style={{ fontSize: 18 }}>گروه :</legend>
            <div className="pe-4" style={{ color: "grey" }}>
              صنعتی
            </div>
          </fieldset>
          <fieldset>
            <legend style={{ fontSize: 18 }}>زیر گروه:</legend>
            <div className="pe-5" style={{ color: "grey" }}>
              صنعتی
            </div>
          </fieldset>
          <fieldset>
            <legend style={{ fontSize: 18 }}>تولید کنندگان:</legend>
            <div className="pe-5" style={{ color: "grey" }}>
              صنعتی
            </div>
          </fieldset>
        </div>
        <h5 className="text-center" style={{ marginTop: 60 }}>
          تاریخ روز عرضه را انتخاب کنید
        </h5>
        <div style={{ width: 200, margin: "0 auto" }}>
          <DatePicker
            label="تا تاریخ"
            value={
              statePDf.from_date?.includes("undefined")
                ? null
                : statePDf.from_date
            }
            setValue={(data) => handelChangeDatePdf(data, "to_date")}
          />
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button
            className={styles["modalBtnGreen"]}
            // onClick={handleCloseDownLoad}
          >
            دانلود
          </button>
          <button
            className={styles["modalBtnRed"]}
            // onClick={handleClose}
            style={{ marginRight: 10 }}
          >
            لغو
          </button>
        </div> */}
    </>
  );
};

export default Index;
