import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 28,
    padding: 24,
    borderRadius: 12,
  },
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    flex: 1,
    elevation: 21,
  },
  description: {
    fontSize: 12,
    marginTop: 16,
  },
});

export default styles;
