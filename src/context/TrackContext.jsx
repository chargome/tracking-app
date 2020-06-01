import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const FETCH_TRACKS_ACTION = 'FETCH_TRACKS_ACTION';

const trackReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TRACKS_ACTION:
      return action.payload;

    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const resp = await trackerApi.get('/tracks');
  dispatch({ type: FETCH_TRACKS_ACTION, payload: resp.data });
};

const createTrack = () => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  [],
);
