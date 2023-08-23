import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home-screen';
import { GhostScreen } from './screens/ghost-screen';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

/**
 * The root component for the entire app
 */
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='GhostScreen' component={GhostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
