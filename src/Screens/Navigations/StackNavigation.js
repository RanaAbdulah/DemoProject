import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import Theme from '../../Utils/Theme';
import ChatScreen from '../ChatScreen/ChatScreen';
import styles from './Style';
const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <SafeAreaView style={styles.MainView}>
      <View>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar
            barStyle="light-content"
            backgroundColor={Theme.blue}
          />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="ChatScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default StackNavigation;
