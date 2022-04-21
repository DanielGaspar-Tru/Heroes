import {StyleSheet} from 'react-native';
import Colors from '../../../globals/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2066AE',
  },
  buttonContainer: {
    height: 88,
    flexGrow: 0,
    paddingTop: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.primaryText,
    fontSize: 16,
  },
});

export default styles;
