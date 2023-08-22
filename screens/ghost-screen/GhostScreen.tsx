import { ScrollView, View, Text } from 'react-native';
import { useCallback } from 'react';
import { NavProps } from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import colors from '../../styles/colors';

/**
 * The screen that displays information about a specific ghost
 * @param route - Route object from ReactNavigation
 * @param navigation - Navigation object from ReactNavigation
 */
export const GhostScreen: React.FC<NavProps> = ({ route, navigation }: NavProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='arrow-left'
          onPress={useCallback(navigation.goBack, [])}
          size={24}
          style={{ marginRight: 15, marginTop: 5 }}
          color={colors.white}
        />
      </View>
      <View style={styles.ghostInfoContainer}>
        <Icon name='ghost' size={24} style={styles.ghostLogo} />
        <Text style={styles.headingText}>{route.params.name}</Text>
        <View style={styles.roundDivider}></View>
      </View>
    </ScrollView>
  );
};
