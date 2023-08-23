import { ScrollView, View, Text } from 'react-native';
import { useCallback } from 'react';
import { NavProps } from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import ghostScreenStyles from './GhostScreenStyles';
import colors from '../../styles/colors';

/**
 * The screen that displays information about a specific ghost
 * @param route - Route object from ReactNavigation
 * @param navigation - Navigation object from ReactNavigation
 */
export const GhostScreen: React.FC<NavProps> = ({ route, navigation }: NavProps) => {
  function evidenceIcon(evidence: string) {
    switch (evidence) {
      case 'Ultraviolet':
        return 'fingerprint';
      case 'Ghost Orb':
        return 'orbit';
      case 'DOTS':
        return 'dots-grid';
      case 'Freezing':
        return 'snowflake';
      case 'Spirit Box':
        return 'radio-handheld';
      case 'EMF':
        return 'car-light-alert';
      default:
        return 'head-question-outline';
    }
  }

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
      <View style={ghostScreenStyles.container}>
        <Icon name='ghost' size={24} style={ghostScreenStyles.ghostLogo} />
        <Text style={styles.headingText}>{route.params.name}</Text>
        <View style={ghostScreenStyles.roundDivider}></View>
        <Text style={ghostScreenStyles.aboutText}>{route.params.about}</Text>
        {/** EVIDENCE */}
        <View style={ghostScreenStyles.speedContainer}>
          {route.params.evidences.map((evidence) => (
            <View style={ghostScreenStyles.speedWrapper} key={evidence}>
              <Icon style={ghostScreenStyles.speedIcon} name={evidenceIcon(evidence)} size={24} />
              <Text style={ghostScreenStyles.speedValue}>{evidence}</Text>
            </View>
          ))}
        </View>
        {/** SPEED */}
        <View style={ghostScreenStyles.speedContainer}>
          <View style={ghostScreenStyles.speedWrapper}>
            <Icon style={ghostScreenStyles.speedIcon} name='walk' size={24} />
            <Text style={ghostScreenStyles.speedValue}>
              {route.params.slowSpeed?.value ?? 1.6}m/s
            </Text>
          </View>
          <View style={ghostScreenStyles.speedWrapper}>
            <Icon style={ghostScreenStyles.speedIcon} name='run-fast' size={24} />
            <Text style={ghostScreenStyles.speedValue}>
              {route.params.fastSpeed?.value ?? 1.6} m/s
            </Text>
          </View>
          <View style={ghostScreenStyles.speedWrapper}>
            <Icon style={ghostScreenStyles.speedIcon} name='eye' size={24} />
            <Text style={ghostScreenStyles.speedValue}>LoS</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
