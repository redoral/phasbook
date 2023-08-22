import { StyleSheet } from 'react-native';
import colors from './colors';

/**
 * Main stylesheet for the entire app
 * @todo Modularize if it gets too big
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchView: {
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  },
  ghostInfoContainer: {
    justifyContent: 'center'
  },
  ghostScreenName: {
    color: colors.white,
    fontSize: 24,
    padding: 15
  },
  roundDivider: {
    color: colors.white,
    borderRadius: 25,
    width: 50
  }
});

export default styles;
