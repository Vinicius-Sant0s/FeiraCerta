/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Divider, GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import List from './components/List';

export default function App(): JSX.Element {
  const list = [
    {id: 1, name: 'Feijão', quant: 0, check: true},
    {id: 2, name: 'Arroz', quant: 2, check: false},
    {id: 3, name: 'Biscoito', quant: 0, check: false},
    {id: 4, name: 'Frutas', quant: 0, check: true},
    {id: 5, name: 'Ovos', quant: 0, check: false},
  ];

  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Box bg="$primary400" p="$5" alignItems={'center'}>
          <Text color={'$secondary0'}>Lista de Compras</Text>
        </Box>

        <Divider />

        <List items={list} />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
