import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../components/screens/Home';
import HeroDetails from '../components/screens/HeroDetails';

import {RoutesNames} from '../enums/RoutesNames';
import {RoutesParamList} from '../types/Routes';

import Colors from '../globals/colors';

const Stack = createNativeStackNavigator<RoutesParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={RoutesNames.HOME}>
        <Stack.Screen name={RoutesNames.HOME} component={Home} />

        <Stack.Screen
          name={RoutesNames.HERO_DETAILS}
          component={HeroDetails}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: Colors.primary,
            headerTransparent: true,
            headerTitleStyle: {
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerBackground: () => (
              <View
                style={[StyleSheet.absoluteFill, styles.heroDetailHeader]}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  heroDetailHeader: {
    backgroundColor: '#00000055',
  },
});

export default Routes;
