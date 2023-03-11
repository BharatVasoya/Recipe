// ---------- Imports ---------- //
import {all} from 'redux-saga/effects';
import {getAnimalActionWatcher} from './getAnimalSaga';

// ---------- Root Saga ---------- //
export default function* root() {
  yield all([getAnimalActionWatcher()]);
}
