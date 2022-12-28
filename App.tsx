import { View, StatusBar } from 'react-native';
import styles from './styles';

/**
 * The main react component for Phasbook.
 * @author Red Oral
 *
 * @returns A react component
 */
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
    </View>
  );
};

export default App;
