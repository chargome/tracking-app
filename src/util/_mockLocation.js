import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => ({
  timestamp: 10000000,
  coords: {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitudeAccuracy: 5,
    altitude: 5,
    longitude: 16.404549 + increment * tenMetersWithDegrees,
    latitude: 48.199313 + increment * tenMetersWithDegrees,
  },
});

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    // eslint-disable-next-line no-underscore-dangle
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter += 1;
}, 2000);
