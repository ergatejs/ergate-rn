import produce from 'immer';
import {put, takeEvery} from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const initialState: InitialState = {
  count: 0,
};

export const model = (state: InitialState = initialState, action: Action) => {
  if (action.type === 'INCREMENT') {
    return produce(state, (draftState: InitialState) => {
      draftState.count = draftState.count + 1;
    });
  }

  if (action.type === 'DECREMENT') {
    return produce(state, (draftState: InitialState) => {
      draftState.count = draftState.count - 1;
    });
  }

  return state;
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

interface InitialState {
  count: number;
}

interface Action {
  type: string;
  payload: any;
}
