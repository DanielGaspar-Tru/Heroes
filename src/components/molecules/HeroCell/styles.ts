import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2066AE',
  },
  cellContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 88,
    borderColor: '#303030',
    borderWidth: 2,
    borderRadius: 8,
  },
  cellButton: {
    padding: 16,
    flexDirection: 'row',

    backgroundColor: 'white',
    overflow: 'hidden',
  },
  infoContainer: {marginLeft: 16, flexGrow: 1},
  descriptionContainer: {flexDirection: 'row', height: 20},
});

export default styles;
