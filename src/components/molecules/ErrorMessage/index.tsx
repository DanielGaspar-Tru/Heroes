import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import ScreenTitle from '../../atoms/ScreenTitle';
import ScreenSubTitle from '../../atoms/ScreenSubtitle';

export type SubTitleProps = {
  label: string;
};

const ErrorMessage: React.FC<SubTitleProps> = ({message}) => {
  return (
    <View style={styles.outroContainer}>
      <ScreenTitle label="Ops! An error ocurred" />
      <ScreenSubTitle label={message} />
    </View>
  );
};

export default ErrorMessage;
