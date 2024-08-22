import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/Account/Account';
import Notification from './screens/Account/Notification';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

  <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='signup' component={Register} options={{headerShown:false}}/>
      <Stack.Screen name='productdetail' component={ProductDetail}/>
      <Stack.Screen name='cart' component={Cart}/>
      <Stack.Screen name='account' component={Account}/>
      <Stack.Screen name='notification' component={Notification}/>
      <Stack.Screen name='profile' component={Profile}/>
      <Stack.Screen name='order' component={MyOrders}/>
      <Stack.Screen name='checkout' component={Checkout}/>
      <Stack.Screen name='payment' component={Payment}/>
    </Stack.Navigator>
    </NavigationContainer>
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
