import { takeLatest, call, put, all } from 'redux-saga/effects';

import { registrationEditRequest } from './actions';

import api from '~/services/api';

export function* registrationList() {
  const data = yield call(api.get, '/registrations');

  yield put(registrationEditRequest(data));
}

export default all([takeLatest('@plan/LIST_REQUEST', registrationList)]);
