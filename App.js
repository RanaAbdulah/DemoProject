import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Screens/Navigations/StackNavigation';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
}
