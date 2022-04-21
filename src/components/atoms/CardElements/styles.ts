import {StyleSheet} from 'react-native';
import Colors from '../../../globals/colors';

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', color: Colors.titleText, fontSize: 18},
  subTitle: {
    fontWeight: 'normal',
    color: Colors.subTitleText,
    fontSize: 12,
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'normal',
    color: Colors.descriptionText,
    fontSize: 10,
    textAlignVertical: 'bottom',
    lineHeight: 24,
  },
});

export default styles;
