import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { NavigationEvents } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = React.useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        // eslint-disable-next-line no-underscore-dangle
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          // eslint-disable-next-line no-underscore-dangle
          <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

TrackListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

// const styles = StyleSheet.create({});

export default TrackListScreen;
