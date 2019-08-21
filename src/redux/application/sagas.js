import { all, takeEvery, put } from 'redux-saga/effects';
import { SET_STATE, APP_LOADING, OPEN_TOAST, CLOSE_TOAST } from './actions';

export function* appLoading({ payload }) {
  const { loading } = payload;
  yield put({
    type: SET_STATE,
    payload: {
      loading,
    },
  });
}

export function* openToast({ payload }) {
  const { message } = payload;
  yield put({
    type: SET_STATE,
    payload: {
      toastOpen: true,
      toastMessage: message,
    },
  });
}

export function* closeToast() {
  yield put({
    type: SET_STATE,
    payload: {
      toastOpen: false,
      toastMessage: '',
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(APP_LOADING, appLoading),
    takeEvery(OPEN_TOAST, openToast),
    takeEvery(CLOSE_TOAST, closeToast),
  ]);
}
