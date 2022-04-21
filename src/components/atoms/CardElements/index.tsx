import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export type TitleProps = {
  label: string;
};

const Title: React.FC<TitleProps> = ({label}) => {
  return <Text style={styles.title}>{label}</Text>;
};

const Subtitle: React.FC<TitleProps> = ({label}) => {
  return <Text style={styles.subTitle}>{label}</Text>;
};

export type DescriptionProps = {
  text: string;
  rest?: any;
};

const Description: React.FC<DescriptionProps> = ({text, ...rest}) => {
  return (
    <Text style={styles.description} {...rest}>
      {text}
    </Text>
  );
};

export {Title, Subtitle, Description};
