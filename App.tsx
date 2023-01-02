import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home-screen';
import { GhostView } from './screens/ghost-view';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

/**
 * The main react component for Phasbook
 * @returns a React component
 */
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='GhostView' component={GhostView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
