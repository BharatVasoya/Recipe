import {
  GET_ANIMAL_WATCHER,
  GET_ANIMAL_SUCCESS,
  GET_ANIMAL_FAILURE,
} from '../../constants';

export function getAnimalWatcher(payload, resolve, reject) {
  return {
    type: GET_ANIMAL_WATCHER,
    payload,
    resolve,
    reject,
  };
}
export function getAnimalSuccess(payload) {
  return {
    type: GET_ANIMAL_SUCCESS,
    payload,
  };
}
export function getAnimalFailure(error) {
  return {
    type: GET_ANIMAL_FAILURE,
    payload: error,
  };
}
