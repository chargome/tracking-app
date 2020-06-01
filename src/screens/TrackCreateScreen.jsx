import '../util/_mockLocation';
import React from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';

import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = React.useContext(LocationContext);

  const callback = React.useCallback((location) => {
    addLocation(location, state.recording);
  }, [state.recording]);

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      { err ? <Text>Please enable location services</Text> : null }
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

// const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
