import {all, fork} from 'redux-saga/effects';
import {sagas as counter} from './counter';

const convert = (sagas: any) => {
  // @ts-ignore
  return all(Object.keys(sagas).map((saga) => fork(sagas[saga])));
};

export default function* () {
  yield convert(counter);
}
