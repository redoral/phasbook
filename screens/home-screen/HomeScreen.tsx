import { View, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import { GhostList } from '../../components/ghost-list';
import { Ghost } from '../../types';
import { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import colors from '../../styles/colors';
import FilterModal from '../../components/filter-modal/FilterModal';

/**
 * Main home screen for the app.
 * @param navigation - The navigation object from ReactNavigation
 * @function navigateToGhostScreen - Function used to navigate to GhostScreen using ReactNavigation
 */
export const HomeScreen: React.FC = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortModalIsOpen, setSortModalIsOpen] = useState(true);
  const [speedFilters, setSpeedFilters] = useState({
    all: true,
    fast: true,
    slow: true,
    normal: true,
    los: true
  });

  const navigateToGhostScreen = useCallback((selectedGhost: Ghost) => {
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
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setSortModalIsOpen(true)}>
            <Icon name='filter-variant' color={'#fff'} size={24} style={{ marginRight: 16 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='sort' color={'#fff'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchView}>
        <Icon name='magnify' size={16} style={styles.headingIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
          placeholderTextColor={colors.white}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <GhostList
        speedFilters={speedFilters}
        searchQuery={searchQuery}
        navigateToGhostScreen={navigateToGhostScreen}
      />
      <FilterModal
        speedFilters={speedFilters}
        setSpeedFilters={setSpeedFilters}
        isOpen={sortModalIsOpen}
        setIsOpen={setSortModalIsOpen}
      />
    </View>
  );
};
