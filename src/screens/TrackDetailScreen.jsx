import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

const TrackDetailScreen = ({ navigation }) => {
  const { state } = React.useContext(TrackContext);
  const id = navigation.getParam('_id');
  // eslint-disable-next-line no-underscore-dangle
  const track = state.find((item) => item._id === id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>
        {track.name}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

TrackDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default TrackDetailScreen;
