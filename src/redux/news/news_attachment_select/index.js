import AxiosCustom from "../../../components/common/apiConfig";
import { put, takeLatest } from "@redux-saga/core/effects";

export const actionTypes = {
  selectNewsAttachment: "[selectNewsAttachment] Action",
  selectNewsAttachmentLoading: "[selectNewsAttachmentLoading] Action",
  selectNewsAttachmentAsync: "[selectNewsAttachmentAsync] Action",
};

const initialState = {
  data: [],
  size: 20,
  total: 10000,
  loading: false,
};

export const news_select_Attachment_reducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.selectNewsAttachment:
      return {
        ...state,
        data: payload.results,
        total: payload.total ? payload.total : state.total,
      };
    case actionTypes.selectNewsAttachmentLoading:
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
    type: actionTypes.selectNewsAttachmentLoading,
    payload: true,
  });

  try {
    let res = yield AxiosCustom(config, data);

    yield put({
      type: actionTypes.selectNewsAttachment,
      payload: res.data.response.data,
    });
    yield put({
      type: actionTypes.selectNewsAttachmentLoading,
      payload: false,
    });
  } catch {
    //   handleNotificationAlertCatch();
    yield put({
      type: actionTypes.selectNewsAttachmentLoading,
      payload: false,
    });
  }
}

export function* newsSelectAttachment() {
  yield takeLatest(actionTypes.selectNewsAttachmentAsync, handleWorker);
}
