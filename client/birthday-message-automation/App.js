import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../birthday-message-automation/components/homeScreen';
import Birthdays from '../birthday-message-automation/components/birthdays';


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
          name="Birthdays"
          component={Birthdays}
          // options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
