import React from 'react';
import { View } from 'react-native';
import LoginScreen from '../components/LoginScreen';

const IndexPage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
};

export default IndexPage;
