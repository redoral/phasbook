import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const ghostScreenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 48
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

export default ghostScreenStyles;
