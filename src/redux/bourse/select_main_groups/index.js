import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

  
  
  
  
  
  export const actionTypes = {
      selectMainGroupsBourse:"[selectMainGroupsBourse] Action",
      selectMainGroupsBourseAsync:"[selectMainGroupsBourseAsync] Action"
  }

  const initialState={
      data:[],
      size:20,
      total:10000
  }


  export const bourse_select_mainGroup_reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.selectMainGroupsBourse:
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
      method_type: "select_main_groups",
      from: payload?.from ? (payload.from - 1) * payload.size : 0,
      size: payload?.size,
      data: payload?.data ? payload.data : {},
      sort_by: payload?.sort_by ? payload?.sort_by :{} ,
    };
  
    try {
      
      let res = yield AxiosCustom(config, data);  

    //   let flag = handleNotificationAlertTrySelect(res);
      
    //   if (!flag) return;
      
      yield put({
        type: actionTypes.selectMainGroupsBourse,
        payload: res.data.response.data
      });
      
    } catch {
    //   handleNotificationAlertCatch();
    }
  }
  
  export function* bourseMainGroupSelect() {
    yield takeLatest(actionTypes.selectMainGroupsBourseAsync, handleWorker);
  }
  