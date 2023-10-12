/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import {GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Text>Hello World!</Text>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
