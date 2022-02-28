import {put, takeLatest} from "@redux-saga/core/effects";
import AxiosCustom from "../../../components/common/apiConfig";

export const actionTypes = {
    selectAccounts: "[selectAccounts] Action",
    selectAccountsLoading: "[selectAccountsLoading] Action",
    selectAccountsAync: "[selectAccountsAync] Action",
};

const initialState = {
    data: [],
    size: 20,
    total: 0,
    loading: false,
};

export const accounts_select_reducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case actionTypes.selectAccounts:
            return {
                ...state,
                data: payload.results,
                total: payload.total
                    ? payload.total > 10000
                        ? 10000
                        : payload.total
                    : 10000,
            };
        case actionTypes.selectAccountsLoading:
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
        table: "static",
        method_type: "select",
        from: payload?.from ? (payload.from - 1) * payload.size : 0,
        size: payload?.size,
        data: { name: "accounts" }
    };
    yield put({
        type: actionTypes.selectAccountsLoading,
        payload: true,
    });

    try {
        let res = yield AxiosCustom(config, data);

        yield put({
            type: actionTypes.selectAccounts,
            payload: res.data.response.data,
        });
        yield put({
            type: actionTypes.selectAccountsLoading,
            payload: false,
        });
    } catch {
        yield put({
            type: actionTypes.selectAccountsLoading,
            payload: false,
        });
    }
}

export function* accountsSelect() {
    yield takeLatest(actionTypes.selectAccountsAync, handleWorker);
}
