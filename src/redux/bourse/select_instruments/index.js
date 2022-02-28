import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

export const actionTypes = {
  selectInstruments: "[selectInstruments] Action",
  selectInstrumentsLoad: "[selectInstrumentsLoad] Action",
  selectInstrumentsAsync: "[selectInstrumentsAsync] Action",
};

const initialState = {
  data: [],
  size: 10,
  total: 0,
  loading: false,
};

export const bourse_select_instruments_reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.selectInstruments:
      return {
        ...state,
        data: payload.results,
        total: payload.total
          ? payload.total > 10000
            ? 10000
            : payload.total
          : 0,
      };
    case actionTypes.selectInstrumentsLoad:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

function* handleWorker({ payload }) {
  yield put({ type: actionTypes.selectInstrumentsLoad, payload: true });

  let config = {
    url: "select_request",
  };

  let data = {
    table: "imetrade",
    method_type: "select_instruments",
    from: payload?.from ? payload.from * 10 : payload.from,
    size: payload?.size,
    data: payload?.data ? payload.data : {},
    sort_by: payload?.sort_by ? payload?.sort_by : {},
  };

  try {
    let res = yield AxiosCustom(config, data);

    // let flag = handleNotificationAlertTrySelect(res);

    // if (!flag) return;

    if (res.data.response.is_successful) {
      yield put({
        type: actionTypes.selectInstruments,
        payload: res.data.response.data,
      });
    }

    yield put({ type: actionTypes.selectInstrumentsLoad, payload: false });
  } catch {
    //   handleNotificationAlertCatch();
    yield put({ type: actionTypes.selectInstrumentsLoad, payload: false });
  }
}

export function* bourseInstrumentsSelect() {
  yield takeLatest(actionTypes.selectInstrumentsAsync, handleWorker);
}
