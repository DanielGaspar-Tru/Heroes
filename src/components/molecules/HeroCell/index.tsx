import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';

import Avatar from '../../atoms/Avatar';
import {HeroData} from '../../../types/HeroData';
import {useNavigation} from '@react-navigation/native';
import {RoutesNames} from '../../../enums/RoutesNames';
import {Title, Subtitle, Description} from '../../atoms/CardElements';
import styles from './styles';

export type HeroCellProps = {
  data: HeroData;
  rest?: any;
};

const HeroCell: React.FC<HeroCellProps> = ({data, ...rest}) => {
  const navigation = useNavigation();

  const showHeroDetail = useCallback(() => {
    navigation.navigate(RoutesNames.HERO_DETAILS, {hero: data});
  }, [navigation, data]);

  return (
    <View {...rest} style={styles.cellContainer}>
      <TouchableOpacity onPress={showHeroDetail} style={styles.cellButton}>
        <Avatar url={data.imgUrl} />
        <View style={styles.infoContainer}>
          <Title label={data.name} />
          <Subtitle label={data.alterEgo} />
          <View style={styles.descriptionContainer}>
            <Description numberOfLines={1} text={data.description} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeroCell;
