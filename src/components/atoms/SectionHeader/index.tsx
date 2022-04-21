import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export type SectionHeaderProps = {
  title: string;
  rest?: any;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({title, ...rest}) => {
  return (
    <Text style={styles.sectionHeader} {...rest}>
      {title}
    </Text>
  );
};

export default SectionHeader;
