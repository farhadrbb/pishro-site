import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

  
  
  
  
  
  export const actionTypes = {
      selectInstrumentsPdf:"[selectInstrumentsPdf] Action",
      selectInstrumentsLoadPdf:"[selectInstrumentsLoadPdf] Action",
      selectInstrumentsLoadPdfEmpty:"[selectInstrumentsLoadPdfEmpty] Action",
      selectInstrumentsPdfAsync:"[selectInstrumentsPdfAsync] Action"
  }

  const initialState={
      data:[],
      // size:5,
      total:0,
      loading:false
  }


  export const bourse_select_instruments_pdf_reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.selectInstrumentsPdf:
          return {
            ...state,
            data: payload.results,
            total: payload.total 
            ? payload.total >10000
            ?10000
            :payload.total 
            : 0
          };
        case actionTypes.selectInstrumentsLoadPdf:
          return {
            ...state,
            loading:payload
          };
        case actionTypes.selectInstrumentsLoadPdfEmpty:
          return {
            ...initialState
          };
        default:
          return state;
      }
  }



  function* handleWorker({ payload }) {
    yield put({type:actionTypes.selectInstrumentsLoadPdf,payload:true})




    let config = {
      url: "select_request"
    };
  
    let data = {
      table: "imetrade",
      method_type: "select_instruments",
      from: payload?.from ? (payload.from * 10) :payload.from,
      size: payload?.size,
      data: payload?.data ? payload.data : {},
      sort_by: payload?.sort_by ? payload?.sort_by :{} ,
    };
  
    try {
      
      let res = yield AxiosCustom(config, data); 

    //   let flag = handleNotificationAlertTrySelect(res);
      
    //   if (!flag) return;
      
      yield put({
        type: actionTypes.selectInstrumentsPdf,
        payload: res.data.response.data
      });
      yield put({type:actionTypes.selectInstrumentsLoadPdf,payload:false})
      
    } catch { 
      yield put({
      type: actionTypes.selectInstrumentsPdf,
      payload: {results:[],total:0}
    });
    //   handleNotificationAlertCatch();
    yield put({type:actionTypes.selectInstrumentsLoadPdf,payload:false})
    }
  }
  
  export function* bourseInstrumentsSelectPdf() {
    yield takeLatest(actionTypes.selectInstrumentsPdfAsync, handleWorker);
  }
  