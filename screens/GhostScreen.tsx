import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavProps } from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

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
    <ScrollView contentContainerStyle={ghostScreenStyles.container}>
      <View style={ghostScreenStyles.header}>
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
        <Text style={ghostScreenStyles.headingText}>{route.params.name}</Text>
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

const ghostScreenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 24,
    height: '100%',
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
  ghostLogo: {
    color: colors.white
  },
  roundDivider: {
    width: 32,
    height: 8,
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: colors.white
  },
  aboutText: {
    color: colors.white,
    fontSize: 12
  },
  speedContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    marginTop: 12,
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 5
  },
  infoIconsdWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoIcon: {
    color: colors.white
  },
  infoIconValue: {
    paddingTop: 4,
    color: '#fff',
    fontSize: 12
  },
  infoIconLabel: {
    color: '#cfcfcf',
    fontSize: 10
  }
});
