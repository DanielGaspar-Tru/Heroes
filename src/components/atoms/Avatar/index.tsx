import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

export type AvatarProps = {
  url: string;
};

const Avatar: React.FC<AvatarProps> = ({url}) => {
  return (
    <Image
      source={{
        uri: url,
      }}
      style={styles.avatar}
      resizeMode="cover"
    />
  );
};

export default Avatar;
