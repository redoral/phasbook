import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 25,
    justifyContent: 'space-between',
    padding: 25
  },
  headingText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 24
  },
  searchView: {
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#404258',
    backgroundColor: colors.secondary
  },
  headingIcon: {
    color: colors.white,
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    background: 'none',
    color: colors.white
  },
  ghostListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.secondary
  },
  ghostLogo: {
    marginRight: 15,
    color: colors.white
  },
  ghostListItemHeading: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16
  },
  ghostStats: {
    flexDirection: 'row'
  },
  ghostListItemText: {
    color: colors.white,
    fontSize: 14,
    marginRight: 10
  }
});

export default styles;
