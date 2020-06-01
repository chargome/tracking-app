import React from 'react';

import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../util/navigationRef';

const useSaveTrack = () => {
  const { createTrack } = React.useContext(TrackContext);
  const { state: { locations, name }, reset } = React.useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};

export default useSaveTrack;
