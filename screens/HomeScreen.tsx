import { View, StatusBar, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { GhostList } from '../components/GhostList';
import { Ghost } from '../types';
import { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import FilterModal from '../components/FilterModal';

/**
 * Main home screen for the app.
 * @param navigation - The navigation object from ReactNavigation
 * @function navigateToGhostScreen - Function used to navigate to GhostScreen using ReactNavigation
 */
export const HomeScreen: React.FC = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortModalIsOpen, setSortModalIsOpen] = useState(false);
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
    <View style={homeScreenStyles.container}>
      <StatusBar backgroundColor={colors.black} />
      <View style={homeScreenStyles.header}>
        <Text style={homeScreenStyles.headingText}>
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
      <View style={homeScreenStyles.searchView}>
        <Icon name='magnify' size={16} style={homeScreenStyles.headingIcon} />
        <TextInput
          style={homeScreenStyles.searchInput}
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

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
    padding: 25
  },
  headingText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 24
  },
  text: {
    color: colors.white
  },
  subText: {
    color: '#dfdfdf'
  },
  searchView: {
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#404258',
    backgroundColor: colors.secondary
  },
  headingIcon: {
    color: colors.white,
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    background: 'none',
    color: colors.white
  }
});
