import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

export const actionTypes = {
    selectShoab: "[selectShoab] Action",
    selectShoabLoading: "[selectShoabLoading] Action",
    selectShoabAync: "[selectShoabAync] Action",
};

const initialState = {
    data: [],
    size: 20,
    total: 0,
    loading: false,
};

export const Shoab_select_reducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case actionTypes.selectShoab:
            return {
                ...state,
                data: payload.results.reverse(),
                total: payload.total
                    ? payload.total > 10000
                        ? 10000
                        : payload.total
                    : 20,
            };
        case actionTypes.selectShoabLoading:
            return {
                ...state,
                loading: payload,
            };

        default:
            return state;
    }
};

function* handleWorker() {
    let config = {
        url: "select_request",
    };

    let data = {
        table: "shoab",
        method_type: "select",
        // from: payload?.from ? (payload.from - 1) * payload.size : 0,
        // size: payload?.size,
        data: {}
    };
    yield put({
        type: actionTypes.selectShoabLoading,
        payload: true,
    });

    try {
        let res = yield AxiosCustom(config, data);

        yield put({
            type: actionTypes.selectShoab,
            payload: res.data.response.data,
        });
        yield put({
            type: actionTypes.selectShoabLoading,
            payload: false,
        });
    } catch {
        yield put({
            type: actionTypes.selectShoabLoading,
            payload: false,
        });
    }
}

export function* ShoabSelect() {
    yield takeLatest(actionTypes.selectShoabAync, handleWorker);
}
