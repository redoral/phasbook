import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../styles';
import { GhostI } from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface GhostListItemI {
  ghost: GhostI;
}

/**
 * The ListRenderItem for the GhostList FlatList
 * @returns a React component
 */
export const GhostListItem: React.FC<GhostListItemI> = ({ ghost }: GhostListItemI) => {
  return (
    <TouchableOpacity style={styles.ghostListItem}>
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
