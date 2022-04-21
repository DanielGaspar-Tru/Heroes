import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';

import globalStyles from '../../../globals/styles';
import HeroCard from '../../molecules/HeroCard';
import Banner from '../../atoms/Banner';

const HeroDetails: React.FC = ({route, navigation}) => {
  const {hero} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: hero.name,
    });
  }, [hero, navigation]);

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="light-content" />
      <Banner url={hero.imgUrl} />
      <View style={globalStyles.content}>
        <HeroCard data={hero} />
      </View>
    </View>
  );
};

/*
 <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />;
 */

export default HeroDetails;
