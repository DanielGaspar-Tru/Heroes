import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export type SubTitleProps = {
  label: string;
};

const ScreenSubTitle: React.FC<SubTitleProps> = ({label}) => {
  return <Text style={styles.subTitle}>{label}</Text>;
};

export default ScreenSubTitle;
