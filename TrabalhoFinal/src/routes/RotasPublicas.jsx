import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const RotasPublicas = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: "MEU LOGIN", headerShown: false}} />
    </Stack.Navigator>
  );
};