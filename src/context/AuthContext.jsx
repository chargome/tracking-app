import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../util/navigationRef';

const ADD_ERROR_ACTION = 'ADD_ERROR_ACTION';
const CLEAR_ERROR_ACTION = 'CLEAR_ERROR_ACTION';
const SIGNIN_ACTION = 'SIGNIN_ACTION';
const SIGNOUT_ACTION = 'SIGNOUT_ACTION';

const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR_ACTION:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_ACTION:
      return { ...state, errorMessage: '' };
    case SIGNIN_ACTION:
      return { ...state, token: action.payload, errorMessage: '' };
    case SIGNOUT_ACTION:
      return { ...state, token: '' };
    default:
      return state;
  }
};

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: SIGNIN_ACTION, payload: res.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: ADD_ERROR_ACTION, payload: 'Something went wrong' });
  }
};

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: SIGNIN_ACTION, payload: res.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: ADD_ERROR_ACTION, payload: 'Email or password is wrong' });
  }
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGNOUT_ACTION });
  navigate('loginFlow');
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: SIGNIN_ACTION, payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const clearError = (dispatch) => () => {
  dispatch({ type: CLEAR_ERROR_ACTION });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signIn,
    signOut,
    signUp,
    clearError,
    tryLocalSignIn,
  },
  {
    token: null,
    errorMessage: '',
  },
);
