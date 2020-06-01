import createDataContext from './createDataContext';

const ADD_CURRENT_LOCATION_ACTION = 'ADD_CURRENT_LOCATION_ACTION';
const ADD_LOCATION_ACTION = 'ADD_LOCATION_ACTION';
const START_RECORDING_ACTION = 'START_RECORDING_ACTION';
const STOP_RECORDING_ACTION = 'STOP_RECORDING_ACTION';
const CHANGE_NAME_ACTION = 'CHANGE_NAME_ACTION';
const RESET_ACTION = 'RESET_ACTION';

const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION_ACTION:
      return { ...state, currentLocation: action.payload };

    case START_RECORDING_ACTION:
      return { ...state, recording: true };

    case STOP_RECORDING_ACTION:
      return { ...state, recording: false };

    case ADD_LOCATION_ACTION:
      if (state.recording) {
        return {
          ...state,
          locations: [...state.locations, action.payload],
          currentLocation: action.payload,
        };
      }
      return { ...state, currentLocation: action.payload };

    case CHANGE_NAME_ACTION:
      return { ...state, name: action.payload };

    case RESET_ACTION:
      return { ...state, name: '', locations: [] };

    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ type: CHANGE_NAME_ACTION, payload: name });
};

const startRecording = (dispatch) => () => {
  dispatch({ type: START_RECORDING_ACTION });
};

const stopRecording = (dispatch) => () => {
  dispatch({ type: STOP_RECORDING_ACTION });
};

const addLocation = (dispatch) => (location) => {
  // dispatch({ type: ADD_CURRENT_LOCATION_ACTION, payload: location });
  // if (recording) {
  dispatch({ type: ADD_LOCATION_ACTION, payload: location });
};

const reset = (dispatch) => () => {
  dispatch({ type: RESET_ACTION });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset,
  },
  {
    recording: false,
    locations: [],
    currentLocation: null,
    name: '',
  },
);
