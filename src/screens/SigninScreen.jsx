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

const SigninScreen = () => {
  const { state, signIn, clearError } = React.useContext(authContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearError}
      />
      <AuthForm
        headerText="Sign in for Tracking"
        submitButtonText="Sign In"
        onSubmit={signIn}
        errorMessage={state.errorMessage}
      />
      <NavLink
        title="Not registered? Sign up"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});


export default SigninScreen;
