import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../styles';
import { Ghost, GhostListItemProps } from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCallback } from 'react';

/**
 * The ListRenderItem for the GhostList FlatList
 * @returns a React component
 */
export const GhostListItem: React.FC<GhostListItemProps> = ({
  ghost,
  navigate
}: GhostListItemProps) => {
  return (
    <TouchableOpacity style={styles.ghostListItem} onPress={useCallback(() => navigate(ghost), [])}>
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
