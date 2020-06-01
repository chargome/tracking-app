import React from 'react';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer />
      <Text h3>Account</Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={signOut}
        />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;
