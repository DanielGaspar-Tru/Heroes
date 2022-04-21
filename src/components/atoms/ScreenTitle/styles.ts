import {StyleSheet} from 'react-native';
import Colors from '../../../globals/colors';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Colors.primaryText,
    fontSize: 24,
    padding: 24,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 6,
  },
});

export default styles;
