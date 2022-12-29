import { StyleSheet, StatusBar } from 'react-native';
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
  headingIcon: {
    color: colors.white
  },
  headingText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 24
  },
  filterBar: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 15,
    borderRadius: 25,
    minHeight: 50
  },
  ghostList: {
    paddingTop: 5
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
