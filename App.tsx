import { View, StatusBar, Text } from 'react-native';
import { GhostList } from './components/ghost-list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from './styles/colors';

/**
 * The main react component for Phasbook
 * @returns a React component
 */
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <View style={styles.header}>
        <Text style={styles.headingText}>
          <Icon name='book-outline' size={24} />
          Phasbook
        </Text>
        <Icon name='magnify' size={24} style={styles.headingIcon} />
      </View>
      <GhostList />
    </View>
  );
};

export default App;
