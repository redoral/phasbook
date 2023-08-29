import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ghost } from '../types';
import { useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

/**
 * Type for the the react props for the GhostListItem component
 * @member navigateToGhostScreen - The function used to navigate to GhostScreen with ReactNavigation
 * @member ghost - The ghost object passed from the GhostRenderItem
 */
type GhostListItemProps = {
  navigateToGhostScreen: (selectedGhost: Ghost) => void;
  ghost: Ghost;
};

/**
 * The ListRenderItem for the GhostList FlatList
 * @param ghost - The selected ghost from the Touchable
 * @param navigateToGhostScreen - The navigate function used to go to GhostScreen
 */
export const GhostListItem: React.FC<GhostListItemProps> = ({
  ghost,
  navigateToGhostScreen
}: GhostListItemProps) => {
  return (
    <TouchableOpacity
      style={ghostListItemStyles.ghostListItem}
      onPress={useCallback(() => navigateToGhostScreen(ghost), [])}>
      <View>
        <Icon name='ghost' style={ghostListItemStyles.ghostLogo} size={26} />
      </View>
      <View>
        <Text style={ghostListItemStyles.ghostListItemHeading}>{ghost.name}</Text>
        <View style={ghostListItemStyles.ghostStats}>
          <Text style={ghostListItemStyles.ghostListItemText}>
            <Icon name='walk' size={16} /> {ghost.slowSpeed?.value ?? 1.7} m/s
          </Text>
          <Text style={ghostListItemStyles.ghostListItemText}>
            <Icon name='run-fast' size={16} /> {ghost.fastSpeed?.value ?? 1.7} m/s
          </Text>
          <Text style={ghostListItemStyles.ghostListItemText}>
            <Icon name='brain' size={16} /> {ghost.hunt ?? 50}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ghostListItemStyles = StyleSheet.create({
  ghostListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.secondary
  },
  ghostLogo: {
    marginRight: 15,
    color: colors.white
  },
  ghostListItemHeading: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16
  },
  ghostStats: {
    flexDirection: 'row'
  },
  ghostListItemText: {
    color: colors.white,
    fontSize: 14,
    marginRight: 10
  },
  ghostInfoContainer: {
    justifyContent: 'center'
  }
});
