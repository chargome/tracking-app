import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import Spacer from './Spacer';


const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
  },
});

const AuthForm = ({
  headerText,
  submitButtonText,
  errorMessage,
  onSubmit,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

AuthForm.propTypes = {
  headerText: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  errorMessage: '',
};

export default AuthForm;
