import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

  
  
  
  
  
  export const actionTypes = {
      selectCategortyBourse:"[selectCategortyBourse] Action",
      selectCategortyBourseEmpty:"[selectCategortyBourseEmpty] Action",
      selectCategortyBourseAsync:"[selectCategortyBourseAsync] Action"
  }

  const initialState={
      data:[],
      size:20,
      total:10000
  }


  export const bourse_select_category_reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.selectCategortyBourse:
          return {
            ...state,
            data: payload.results,
            total:payload.total ? payload.total : state.total
          };
        case actionTypes.selectCategortyBourseEmpty:
          return initialState
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
      method_type: "select_categories",
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
        type: actionTypes.selectCategortyBourse,
        payload: res.data.response.data
      });
      
    } catch {
    //   handleNotificationAlertCatch();
    }
  }
  
  export function* bourseCategorySelect() {
    yield takeLatest(actionTypes.selectCategortyBourseAsync, handleWorker);
  }
  