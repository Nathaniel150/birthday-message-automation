import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../birthday-message-automation/components/homeScreen';
import Header from '../birthday-message-automation/components/header';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          // options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
