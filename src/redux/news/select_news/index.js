import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

export const actionTypes = {
  selectNews: "[selectNews] Action",
  selectNewsLoading: "[selectNewsLoading] Action",
  selectNewsAsync: "[selectNewsAsync] Action",
};

const initialState = {
  data: [],
  size: 20,
  total: 0,
  loading: false,
};

export const news_select_reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.selectNews:
      return {
        ...state,
        data: payload.results,
        total: payload.total
          ? payload.total > 10000
            ? 10000
            : payload.total
          : 10000,
      };
    case actionTypes.selectNewsLoading:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

function* handleWorker({ payload }) {
  let config = {
    url: "select_request",
  };

  let data = {
    table: "news",
    method_type: "select",
    from: payload?.from ? (payload.from - 1) * payload.size : 0,
    size: payload?.size,
    data: payload?.data ? payload.data : {},
  };
  yield put({
    type: actionTypes.selectNewsLoading,
    payload: true,
  });

  try {
    let res = yield AxiosCustom(config, data);

    yield put({
      type: actionTypes.selectNews,
      payload: res.data.response.data,
    });
    yield put({
      type: actionTypes.selectNewsLoading,
      payload: false,
    });
  } catch {
    yield put({
      type: actionTypes.selectNewsLoading,
      payload: false,
    });
  }
}

export function* newsSelect() {
  yield takeLatest(actionTypes.selectNewsAsync, handleWorker);
}
