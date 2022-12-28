import { StyleSheet, StatusBar } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: StatusBar.currentHeight,
    paddingVertical: 25,
    paddingHorizontal: 15
  }
});

export default styles;
