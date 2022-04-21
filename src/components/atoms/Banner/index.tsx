import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

export type AvatarProps = {
  url: string;
};

const Banner: React.FC<AvatarProps> = ({url}) => {
  return (
    <Image
      source={{
        uri: url,
      }}
      style={styles.banner}
      resizeMode="cover"
    />
  );
};

export default Banner;
