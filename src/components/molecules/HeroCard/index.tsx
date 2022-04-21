import React from 'react';
import {View, ScrollView} from 'react-native';

import {HeroData} from '../../../types/HeroData';
import {Title, Subtitle, Description} from '../../atoms/CardElements';
import styles from './styles';

export type HeroCardProps = {
  data: HeroData;
  rest?: any;
};

const HeroCard: React.FC<HeroCardProps> = ({data, ...rest}) => {
  return (
    <View style={styles.cardContainer}>
      <ScrollView
        {...rest}
        style={styles.card}
        showsVerticalScrollIndicator={false}>
        <Title label={data.name} />
        <Subtitle label={data.alterEgo} />
        <Description text={data.description} style={styles.description} />
      </ScrollView>
    </View>
  );
};

export default HeroCard;
