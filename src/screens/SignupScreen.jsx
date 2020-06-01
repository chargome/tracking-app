import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { Context as authContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
  },
});

const SignupScreen = () => {
  const {
    state, signUp, clearError,
  } = React.useContext(authContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearError}
      />
      <AuthForm
        headerText="Sign up for Tracking"
        submitButtonText="Sign Up"
        onSubmit={signUp}
        errorMessage={state.errorMessage}
      />
      <NavLink
        title="Already have an account? Sign in"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;
