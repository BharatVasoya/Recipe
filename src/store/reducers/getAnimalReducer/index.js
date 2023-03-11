import {
  GET_ANIMAL_WATCHER,
  GET_ANIMAL_SUCCESS,
  GET_ANIMAL_FAILURE,
} from '../../constants';

const initialState = {
  getAnimalError: null,
  getAnimalLoader: false,
  getData: [],
};

export default function getAnimalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANIMAL_WATCHER:
      return {
        ...state,
        getAnimalLoader: true,
      };
    case GET_ANIMAL_SUCCESS:
      return {
        ...state,
        getAnimalError: null,
        getData: action.payload,
        getAnimalLoader: false,
      };
    case GET_ANIMAL_FAILURE:
      return {
        ...state,
        getAnimalError: action,
        getAnimalLoader: false,
      };
    default:
      return state;
  }
}
