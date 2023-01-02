import { View, StatusBar, Text, TextInput } from 'react-native';
import { GhostList } from '../../components/ghost-list';
import { Ghost } from '../../types';
import { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../..//styles';
import colors from '../../styles/colors';

/**
 * Main home screen for the app.
 * @returns A React functional component
 */
export const HomeScreen: React.FC = ({ navigation }: any) => {
  const navigate = useCallback((selectedGhost: Ghost) => {
    navigation.navigate('GhostScreen', selectedGhost);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <View style={styles.header}>
        <Text style={styles.headingText}>
          <Icon name='book-outline' size={24} />
          Phasbook
        </Text>
      </View>
      <View style={styles.searchView}>
        <Icon name='magnify' size={16} style={styles.headingIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
          placeholderTextColor={colors.white}
        />
      </View>
      <GhostList navigate={navigate} />
    </View>
  );
};
