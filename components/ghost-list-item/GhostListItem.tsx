import { TouchableOpacity, Text, View } from 'react-native';
import { GhostListItemProps } from '../../types';
import { useCallback } from 'react';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      style={styles.ghostListItem}
      onPress={useCallback(() => navigateToGhostScreen(ghost), [])}>
      <View>
        <Icon name='ghost' style={styles.ghostLogo} size={26} />
      </View>
      <View>
        <Text style={styles.ghostListItemHeading}>{ghost.name}</Text>
        <View style={styles.ghostStats}>
          <Text style={styles.ghostListItemText}>
            <Icon name='run-fast' size={16} /> {ghost.speed} m/s
          </Text>
          <Text style={styles.ghostListItemText}>
            <Icon name='brain' size={16} /> {ghost.huntSanity}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
