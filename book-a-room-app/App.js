import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SigninScreen from './screen/Signin';
import DashboardScreen from './screen/Dashboard';
import BookingScreen from './screen/Booking';

const Stack = createNativeStackNavigator()

const App = () => {

  const headerOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: 'teal'},
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
    headerRight: () => (
      <Pressable onPress={() => {
          if (navigation.canGoBack()){
            //remove all the screens from stack and just show the top one
            navigation.dispatch(StackActions.popToTop())
          }
      }} style={{marginRight: 12}}>
        <Text style={{color:'white', fontWeight: 'bold'}}>Logout</Text>
      </Pressable>
    )
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen 
          name='Signin' 
          component={SigninScreen} 
          options={{headerShown: false}}
        />
        <Stack.Group screenOptions={headerOptions}>
          <Stack.Screen
            name='Dashboard' 
            component={DashboardScreen}
            options={{headerBackVisible: false, gestureEnabled: false, headerLeft: null}}
          />
          <Stack.Screen name='Booking' component={BookingScreen}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App 

