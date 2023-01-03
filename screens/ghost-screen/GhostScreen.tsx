import { ScrollView, View, Text } from 'react-native';
import { NavProps } from '../../types';
import styles from '../../styles';

/**
 * The screen that displays information about a specific ghost
 * @param route - Route object from ReactNavigation
 * @param navigation - Navigation object from ReactNavigation
 */
export const GhostScreen: React.FC<NavProps> = ({ route, navigation }: NavProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>{route.params.name}</Text>
      </View>
    </ScrollView>
  );
};
