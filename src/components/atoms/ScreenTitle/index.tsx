import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export type TitleProps = {
  label: string;
};

const ScreenTitle: React.FC<TitleProps> = ({label}) => {
  return <Text style={styles.title}>{label}</Text>;
};

export default ScreenTitle;
