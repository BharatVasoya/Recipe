import {takeLatest, put} from 'redux-saga/effects';
import {GET_ANIMAL_WATCHER} from '../../constants';
import {
  getAnimalSuccess,
  getAnimalFailure,
} from '../../actions/getAnimalAction';

function* onGetAnimal(getAninalAction) {
  let {payload, resolve, reject} = getAninalAction;
  try {
    const header = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '2788f67f83msh1d56a08324b7820p17c70cjsn40bd3821ed9d',
    };

    const response = yield fetch(
      `https://dietary-laws.p.rapidapi.com/creatures/${payload.name}?limit=${payload.limit}`,
      {
        method: 'GET',
        headers: header,
      },
    ).then(res => res.json());

    yield put(getAnimalSuccess(response));
    resolve(response);
  } catch (e) {
    yield put(getAnimalFailure(e));
    reject(e);
  }
}

export function* getAnimalActionWatcher() {
  yield takeLatest(GET_ANIMAL_WATCHER, onGetAnimal);
}
