import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import OnboardReducer from './src/store/OnboardReducer';


const store = configureStore({
  reducer: {
     onboard: OnboardReducer
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
