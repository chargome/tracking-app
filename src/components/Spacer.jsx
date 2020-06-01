import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

const Spacer = ({ children }) => (
  <View style={styles.spacer}>
    { children }
  </View>
);

Spacer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Spacer.defaultProps = {
  children: [],
};

export default Spacer;
