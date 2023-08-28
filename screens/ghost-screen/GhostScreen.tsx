import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { NavProps } from '../../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';
import ghostScreenStyles from './ghostScreenStyles';
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
      case 'Writing':
        return 'book-open';
      default:
        return 'head-question-outline';
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name='arrow-left'
            size={24}
            style={{ marginRight: 15, marginTop: 5 }}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={ghostScreenStyles.container}>
        <Icon name='ghost' size={24} style={ghostScreenStyles.ghostLogo} />
        <Text style={styles.headingText}>{route.params.name}</Text>
        <View style={ghostScreenStyles.roundDivider}></View>
        <Text style={ghostScreenStyles.aboutText}>{route.params.about}</Text>
        {/** EVIDENCE */}
        <View style={ghostScreenStyles.speedContainer}>
          {route.params.evidences.map((evidence) => (
            <View style={ghostScreenStyles.infoIconsdWrapper} key={evidence}>
              <Icon style={ghostScreenStyles.infoIcon} name={evidenceIcon(evidence)} size={24} />
              <Text style={ghostScreenStyles.infoIconValue}>{evidence}</Text>
            </View>
          ))}
        </View>
        {/** SPEED */}
        <View style={ghostScreenStyles.speedContainer}>
          <View style={ghostScreenStyles.infoIconsdWrapper}>
            <Icon style={ghostScreenStyles.infoIcon} name='walk' size={24} />
            <Text style={ghostScreenStyles.infoIconValue}>
              {route.params.slowSpeed?.value ?? 1.7}m/s
            </Text>
            <Text style={ghostScreenStyles.infoIconLabel}>Slowest</Text>
          </View>
          <View style={ghostScreenStyles.infoIconsdWrapper}>
            <Icon style={ghostScreenStyles.infoIcon} name='run-fast' size={24} />
            <Text style={ghostScreenStyles.infoIconValue}>
              {route.params.fastSpeed?.value ?? 1.7} m/s
            </Text>
            <Text style={ghostScreenStyles.infoIconLabel}>Fastest</Text>
          </View>
          <View style={ghostScreenStyles.infoIconsdWrapper}>
            {route.params.noLos ? (
              <>
                <Icon style={ghostScreenStyles.infoIcon} name='eye-off' size={24} />
                <Text style={ghostScreenStyles.infoIconValue}>No LoS</Text>
                <Text style={ghostScreenStyles.infoIconLabel}>Speedup</Text>
              </>
            ) : (
              <>
                <Icon style={ghostScreenStyles.infoIcon} name='eye' size={24} />
                <Text style={ghostScreenStyles.infoIconValue}>LoS</Text>
                <Text style={ghostScreenStyles.infoIconLabel}>Speedup</Text>
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
