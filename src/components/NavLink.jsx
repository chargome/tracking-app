import React from 'react';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Spacer from './Spacer';

const NavLink = ({ navigation, title, routeName }) => (
  <Spacer>
    <Button
      title={title}
      type="clear"
      onPress={() => navigation.navigate(routeName)}
    />
  </Spacer>
);

NavLink.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default withNavigation(NavLink);
