import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

export type ButtonProps = {
  children?: any;
  rest?: any;
};

const HeroCard: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.primary]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default HeroCard;
