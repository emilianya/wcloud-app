/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: 'https://wanderers.cloud/my'}} />
    </View>
  );
};

export default App;
