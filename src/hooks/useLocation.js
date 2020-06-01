import React from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

import { Context as LocationContext } from '../context/LocationContext';


export default (shouldTrack) => {
  const [err, setErr] = React.useState(null);
  const { addLocation } = React.useContext(LocationContext);

  React.useEffect(() => {
    let subscription;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscription = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          (newLocation) => {
            addLocation(newLocation);
          },
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscription) {
        subscription.remove();
      }
      subscription = null;
    }

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [shouldTrack]);

  return [err];
};
