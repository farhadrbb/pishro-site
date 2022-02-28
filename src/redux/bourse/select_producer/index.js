import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

  
  
  
  
  
  export const actionTypes = {
      selectProducer:"[selectProducer] Action",
      selectProducerAsync:"[selectProducerAsync] Action"
  }

  const initialState={
      data:[],
      size:10,
      total:10000,
  }


  export const bourse_select_producer_reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.selectProducer:
          return {
            ...state,
            data: payload.results,
            total:payload.total ? payload.total : state.total
          };
        
        default:
          return state;
      }
  }



  function* handleWorker({ payload }) {

    let config = {
      url: "select_request"
    };
  
    let data = {
      table: "imetrade",
      method_type: "select_producers",
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
        type: actionTypes.selectProducer,
        payload: res.data.response.data
      });
      
    } catch {
    //   handleNotificationAlertCatch();
    }
  }
  
  export function* selectProducer() {
    yield takeLatest(actionTypes.selectProducerAsync, handleWorker);
  }
  