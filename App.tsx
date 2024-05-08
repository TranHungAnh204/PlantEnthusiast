/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Login from './src/screen/LoginScreen';
import Register from './src/screen/RegisterScreen';
import HomeScreen from './src/screen/HomeScreen';
import SearchScreen from './src/screen/SearchScreen';
import NotificationsScreen from './src/screen/NotificationScreen';
import UserScreen from './src/screen/UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screen/DetailScreen';
import CartScreen from './src/screen/CartScreen';
import ListPlantProduct from './src/screen/ListPlantProduct';
import ListProduct from './src/screen/ListPlantProduct';
import Payment from './src/screen/PaymentScreen';
import CardScreen from './src/screen/CardScreen';
import EditInfomation from './src/screen/EditInformation';
import PlaneGuide from './src/screen/PlaneGuideScreen';
import QA from './src/screen/QAScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/home.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Find') {
            iconName = focused
              ? require('./src/images/search.png')
              : require('./src/images/search.png');
          } else if (route.name === 'Notification') {
            iconName = focused
              ? require('./src/images/noti.png')
              : require('./src/images/noti.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./src/images/user.png')
              : require('./src/images/user.png');
          }

          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: [{display: 'flex'}, null],
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Find"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen name="QA" component={QA} options={{headerShown: false}} /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabBottom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListPlantProduct"
            component={ListPlantProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListProduct"
            component={ListProduct}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditInfomation"
            component={EditInfomation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Card"
            component={CardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="QA" component={QA} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

 
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
