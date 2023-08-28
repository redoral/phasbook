import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const filterModalStyles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 32,
    backgroundColor: colors.black,
    borderRadius: 5
  },

  applyButton: {
    backgroundColor: '#404258',
    padding: 12,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 24,
    alignSelf: 'flex-end'
  },
  applyButtonTitle: {
    color: colors.white,
    fontWeight: '700'
  }
});

export default filterModalStyles;
