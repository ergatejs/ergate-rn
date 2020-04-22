import {put, takeEvery} from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const model = (state: number, action: Action) => {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const effects = {
  *incrementAsync(payload: any) {
    yield delay(1000);
    yield put({type: 'INCREMENT', payload});
  },
};

export const sagas = {
  *watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', effects.incrementAsync);
  },
};

interface Action {
  type: string;
  payload: any;
}
